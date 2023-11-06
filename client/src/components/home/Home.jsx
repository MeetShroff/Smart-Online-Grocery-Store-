import { Box, styled } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import Slide from "./Slide";
import Navbar from "./Navbar";
import Midsection from "./Midsection";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productAction";
import { useDispatch , useSelector} from "react-redux";

const Bacground = styled(Box)`
  padding: 10px 5px;
  background-color: lightgray;
`;

const Home = () => {

  const { products } = useSelector(state => state.getProducts.products);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])


  return (
    <>
      <Navbar />
      <Bacground>
        <Banner />
        <Slide product={products} title="Deal of The Day" timer={true}/>
        <Slide product={products} title="Discount For You" timer={true}/>
        <Midsection />
        <Slide product={products} title="Recommonded Items " timer={false}/>
        <Slide product={products} title="Trending Offers" timer={false}/>
        <Slide product={products} title="Top Selection" timer={false} />
      </Bacground>
    </>
  );
};

export default Home;
