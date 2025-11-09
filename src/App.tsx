import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./Components/ProductCard";
import styles from "./styles/collection.module.scss";
import type { Product } from "./Components/productTypes";
import Filter from "../src/Components/Filter";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend.zeepol.ir/api/products?includeVariants=true")
      .then((res) => {
        setProducts(res.data.data.products);

      }).catch((err) => {
        console.error("Failed to fetch products:", err);
      })

  }, []);
  console.log(products)
  return (
    <>
      <Filter />
      <div className={styles.collectionContainer}>
        {products.map((item: Product) => (
          <ProductCard product={item} key={item.id} />
        ))}

      </div>
    </>
  );
}
export default App;
