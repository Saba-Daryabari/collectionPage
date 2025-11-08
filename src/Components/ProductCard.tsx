import type { Product } from "./productTypes";
import styles from "../styles/productCard.module.scss";
import { useState } from "react";

type Props = { product: Product };

const ProductCard = ({ product }: Props) => {
  const BASE_URL = "https://backend.zeepol.ir";
  const mainImage = new URL(product.mainImage, BASE_URL).href;
  const defaultVariant = product.variants[0];

  const [selectedVariant, setSelectedVariant] = useState(defaultVariant.id);

  return (
    <div className={styles.productCard}>
      <img src={mainImage} alt={product.name} className={styles.productImage} />
      <div className={styles.productCaption}>
        <div>
          <h3 className={styles.productTitle}>{product.name}</h3>
          {product.variants.length > 0 && (
            <div className={styles.variantContainer}>
              {product.variants.map((v) => (
                <div
                  key={v.id}
                  className={`${styles.variant} ${
                    selectedVariant === v.id ? styles.activeVariant : ""
                  }`}
                  style={{ backgroundColor: v.color.hex }}
                  onMouseEnter={() => setSelectedVariant(v.id)}
                ></div>
              ))}
            </div>
          )}
        </div>
        <p className={styles.productPrice}>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
