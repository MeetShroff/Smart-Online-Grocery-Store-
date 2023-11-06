import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../login/LoginDialog";
import { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { Link } from "react-router-dom";
import Profile from "./Profile";

const Wrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled(Box)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "space-between",

  display: "flex",
  [theme.breakpoints.down("sm")]: {
    margin: "10px 10px",
    display: "block",
  },
}));

const Loginbtn = styled(Button)`
  background-color: white;
  color: #2874f0;
  text-transform: none;
  padding: 5px 30px;
  border-radius: 2px;
  box-shadow: none;

  &:hover {
    background-color: white;
  }
`;

const Containers = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  color: "inherit",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const Typoc = styled(Box)`
  font-size: 15px;
  margin: 0px 30px;
`;

const CustomButton = () => {
  const [open, setOpen] = useState(false);

  const { Useraccount } = useContext(DataContext);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      <Container>
        {Useraccount ? (
          <Profile />
        ) : (
          <Loginbtn onClick={() => openDialog()}>Login</Loginbtn>
        )}

        <Typoc>Become a Seller</Typoc>
        <Typoc>More</Typoc>

        <Containers to="/cart">
          <Typoc style={{ display: "flex" }}>
            <ShoppingCartIcon />
            <Typography>Cart</Typography>
          </Typoc>
        </Containers>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButton;
