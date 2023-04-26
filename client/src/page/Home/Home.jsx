import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllCards } from "../../components/AllCards/AllCards";
import { getProducts } from "../../redux/actions";

export const Home = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products); // "products" esta declarado en el initalState del reducer

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  console.log(allProducts);
  return (
    <div>
      {/* <AllCards allProducts={allProducts} /> */}
      Home
    </div>
  );
};
