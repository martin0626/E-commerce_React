import classes from "./Loading.module.css";

const LoadingElement = () => {
  return (
    <div className={classes["loading-section"]}>
      <div className={classes["lds-roller"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className={classes["loading-text"]}>Loading...</p>
    </div>
  );
};

export default LoadingElement;
