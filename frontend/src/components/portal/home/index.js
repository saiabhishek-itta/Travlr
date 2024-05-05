import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import { homeState, homeReducer } from "./HomeContext";
import SingleProduct from "./SingleProduct";
import Why from "./Why";
import Reviews from "./Reviews";
import Carousel from "./Carousel";

export const HomeContext = createContext();

const HomeComponent = () => {
  return (
    <Fragment>
      <Carousel />
      <br />
     <h3 className="mb-4"><center>Our Packages</center></h3>
      <section className="rm-4 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:gid-cols-4">
        <SingleProduct />
      </section>  
      <section className="Accordian">
        <Why />
      </section>
      <section className="Reviews">
        <Reviews />
      </section>
      
    </Fragment>
  );
};

const Home = (props) => {
  const [data, dispatch] = useReducer(homeReducer, homeState);
  return (
    <Fragment>
      
      <HomeContext.Provider value={{ data, dispatch }}>
        <Layout children={<HomeComponent />} />
      </HomeContext.Provider>
    </Fragment>
  );
};

export default Home;