import { useTranslation } from "react-i18next";

const Products = () => {
    const {t} = useTranslation();
    return (
      <section id="products">
        <h2>{t('product.title')}</h2>
        <div className="product-icons">
          <div className="product-icon">{t('product.product')}</div>
          <div className="product-icon">Product 2</div>
          <div className="product-icon">Product 3</div>
          <div className="product-icon">Product 4</div>
        </div>
      </section>
    );
  };
  
  export default Products;