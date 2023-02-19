import axios from "axios";

const api = axios.create({ baseURL: "https://be-beb-pod.onrender.com/api" });

export const getFees = () => {
  return api.get("/fees").then((response) => response.data.fees);
};

export const getProducts = () => {
  return api.get("/products").then((response) => response.data.products);
};

export const patchFee = (newFee) => {
  const sendFee = {
    column1: newFee.column1,
    column2: newFee.column2,
    column3: newFee.column3,
  };
  return api
    .patch(`/fees/${newFee.fees_id}`, sendFee)
    .then((response) => response.data.fee);
};

export const patchProduct = (newProduct) => {
  const sendProduct = {
    produce: newProduct.product,
    type: newProduct.type,
    price: newProduct.price,
  };
  return api
    .patch(`/products/${newProduct.products_id}`, sendProduct)
    .then((response) => response.data.product);
};
