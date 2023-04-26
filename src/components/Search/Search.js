import { useState } from "react";
import classes from "./Search.module.css";
import { useSelector } from "react-redux";

const SearchElement = () => {
  const products = useSelector((state) => state.products.products);
  const [isOpenInput, setIsOpenInput] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [currText, setCurrText] = useState("");

  const typeHandler = (e) => {
    let text = e.target.value;
    let matches = [];

    // Check If Input Is Correct, Match Products Titles and Update Suggestions State
    if (text.trim() !== "") {
      matches = products.filter((product) => {
        const regex = new RegExp(`${text}`, "gi");
        return product.title.match(regex);
      });
    }
    setCurrText(text);
    setSuggestions(matches);
  };

  const onBlurHandler = () => {
    setSuggestions([]);
  };

  const chooseSuggestionHandler = (suggestion) => {
    setCurrText(suggestion);
  };

  // Todo Add Effects, On Select And OnBlur Actions :https://www.youtube.com/watch?v=Q2aky3eeO40
  return (
    <div className={`${classes["search-container"]}`}>
      <form className={classes["search-form"]} action="/shop">
        {isOpenInput && (
          <div className={classes["input-container"]}>
            <input
              placeholder="Product..."
              onChange={typeHandler}
              onBlur={() => {
                setTimeout(() => {
                  onBlurHandler();
                }, 100);
              }}
              name="search"
              value={currText}
            ></input>
            <button type="submit" className="fas fa-search"></button>
          </div>
        )}
        {suggestions.length > 0 && (
          <div className={classes.suggestions}>
            {suggestions.map((pr) => (
              <div
                onClick={() => {
                  chooseSuggestionHandler(pr.title);
                }}
                className={classes["single-suggestion"]}
              >
                {pr.title}
              </div>
            ))}
          </div>
        )}
      </form>

      <div className={classes["search-btn"]}>
        <i
          onClick={() => {
            setIsOpenInput(!isOpenInput);
          }}
          class={isOpenInput ? "fas fa-times-circle" : "fas fa-search"}
        ></i>
      </div>
    </div>
  );
};

export default SearchElement;
