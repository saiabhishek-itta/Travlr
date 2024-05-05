import React,{createContext,useReducer} from "react";
import Layout from "../layout/index";
import ProductCategory from "../home/ProductCategory";
import { homeState, homeReducer } from "../home/HomeContext";
export const HomeContext = createContext();

const PackagesComponent = (props) => {
  return (
    <div className="flex flex-col items-center justify-center my-32">
      <span className="text-center text-gray-700 text-4xl font-bold tracking-widest">
      <section className="ProductCategory">
      <ProductCategory/>
      </section>
      </span>
    </div>
  );
};

const Packages = (props) => {
  const [data, dispatch] = useReducer(homeReducer, homeState);
  return (<HomeContext.Provider value={{ data, dispatch }}>
    <Layout children={<PackagesComponent />}/>
    </HomeContext.Provider>)
};

export default Packages;