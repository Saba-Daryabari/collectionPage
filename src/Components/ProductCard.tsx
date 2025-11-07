import type { Product } from "./productTypes";
import styles from "../styles/productCard.module.scss";
import { useState } from "react";

type Props = { product: Product };

const ProductCard = ({ product }: Props) => {
  const BASE_URL = "https://backend.zeepol.ir";
  const mainImage = new URL(product.mainImage, BASE_URL).href;
  const [currentImage, setCurrentImage] = useState(
    new URL(product.mainImage, BASE_URL).href
  );

  return (
    <div className={styles.productCard}>
      <img
        src={currentImage}
        alt={product.name}
        className={styles.productImage}
      />
      <div className={styles.productCaption}>
        <div>
          <h3 className={styles.productTitle}>{product.name}</h3>
          {product.variants.length > 0 && (
            <div className={styles.variantContainer}>
              {product.variants.map((v) => (
                <div
                  key={v.id}
                  className={styles.variant}
                  style={{ backgroundColor: v.color.hex }}
                  onMouseEnter={() => {
                    const img = v.images?.[0];
                    setCurrentImage(
                      img ? new URL(img, BASE_URL).href : mainImage
                    );
                  }}
                  onMouseLeave={() =>
                    setCurrentImage(new URL(product.mainImage, BASE_URL).href)
                  }
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
