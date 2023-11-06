import { Box, Typography, Divider, Button, styled } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import Countdown from "react-countdown";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const Components = styled(Box)`
  margin: 10px 0;
  background-color: white;
`;

const Deal = styled(Box)`
  padding: 10px 15px;
  display: flex;
  allign-items: center;
`;

const Deals = styled(Box)`
  display: flex;
  padding-left: 10px;
  margin-bottom: 10px;
  font-size: 2px;
  color: #7f7f7f;
`;

const Dealbtn = styled(Button)`
  margin-left: auto;
  height: 30px;
  font-size: 14px;
`;

const Image = styled("img")`
  width: auto;
  height: 150px;
`;

const Text = styled(Typography)`

    font-size: 14px;
    color: #7f7f7f;
    margin-top: 2px;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const renderer = ({ hours, minutes, seconds }) => {
  return (
    <Typography>
      {hours}:{minutes}:{seconds} left
    </Typography>
  );
};




const Slide = ({ product, title, timer }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  return (
    <Components>
      <Deal>
        <Typography style={{fontWeight: 600}}> {title} </Typography>
        {timer && (
        <Deals>
          <img src={timerURL} alt="" height={18} />
          <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
        </Deals>
        )}
        <Dealbtn variant="contained"> View All </Dealbtn>
      </Deal>

      <Divider />

      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {(product || []).map((Products) => (
          <Link key={Products.id} to={`/product/${Products.id}`} style={{ textDecoration: 'none'}}>
          <Box  textAlign="center" style={{ padding: "25px 15px" }}>
            <Image src={Products.url} alt="banner" />
            <Text style={{ color:'#212121', fontWeight: 600}} variant="h6">{Products.title.shortTitle}</Text>
            <Text  style={{ color:'green', fontSize: "13px"}} variant="h6">{Products.discount}</Text>
            <Text variant="h6">{Products.tagline}</Text>
          </Box>
          </Link>
        ))
        }
      </Carousel>
    </Components>
  );
};

export default Slide;
