
import styles from "./cardInfo.module.css";

export const CardInfo = () => {
  return (
    <div className={styles.card}>

      <picture>

      <source media="(max-width: 768px)" srcset="./images/image-product-mobile.jpg"></source>
      <img
        className={styles.image}
        src="./images/image-product-desktop.jpg"
        alt="product desktop"
        id="main-img"
      />
      </picture>
      
       
      
      
      <div className={styles.info}>
        <h4>PERFUME</h4>
        <h1>Gabrielle <br/>Essence Eau <br/>De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <h3>
          $149.99&nbsp;&nbsp;&nbsp;<small>$169.99</small>
        </h3>
        <button>
          <img src="./images/icon-cart.svg" className={styles.icon} /> Add to
          Cart
        </button>
      </div>
    </div>
  );
};
