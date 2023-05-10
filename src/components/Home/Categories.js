import useFetch from "../../hooks/use-fetch";

const CategoriesElement = () => {
  const categories = useFetch("http://localhost:8000/products/categories/");
  console.log(categories);

  // Todo Finish Categories Section
  return (
    <section>
      {categories[0].map((category) => (
        <div>
          <h1>{category.title}</h1>
          <div>
            <img src={category.image} width={"200px"} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default CategoriesElement;
