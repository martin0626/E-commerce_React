import classes from "./BrandsSection.module.css";

const Brands = () => {
  // TODO Make Brands Like This https://www.decathlon.bg/
  return (
    <section className={classes["brands-section"]}>
      <p className={classes.text}>Our Brands:</p>

      <div className={classes.brands}>
        <div key={1} className={classes.image}>
          <img src="https://th.bing.com/th/id/OIP.oCcJit_v4rX_ebiFJmY6eAHaEZ?pid=ImgDet&rs=1" />
        </div>
        <div key={2} className={classes.image}>
          <img src="https://pngimg.com/uploads/adidas/adidas_PNG5.png?i=1" />
        </div>
        <div key={3} className={classes.image}>
          <img src="https://www.freepnglogos.com/uploads/reebok-logo-png/crossfit-logo-reebok-images-galleries-1.png" />
        </div>
        <div key={4} className={classes.image}>
          <img src="https://heartrunnergirl.files.wordpress.com/2020/03/toppng.com-mizuno-vector-logo-free-download-400x400-1-e1583503380593.png?w=600" />
        </div>
      </div>
    </section>
  );
};

export default Brands;
