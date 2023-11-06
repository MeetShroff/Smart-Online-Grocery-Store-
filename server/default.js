import { products } from "./constants/Data.js";
import Product from "./model/product-Scema.js";

const defaultData = async() => {
  try {
   await Product.insertMany(products);
    console.log(" Data inserted successfully");
  } catch (error) {
    console.log("Error while inserting default data", error.message);
  }
};

export default defaultData;