import React from "react";
import Dialog from "@mui/material/Dialog";
import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { useState, useContext } from "react";
import { authenticatesignup , authenticatelogin } from "../../service/api.js";
import { DataContext } from "../../context/DataProvider.jsx";

const Component = styled(Box)`
  height: 80vh;
  width: 95vh;
  display: flex;
`;

const Image = styled(Box)`
  background: #2874f0
    url(" https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png")
    center 75% no-repeat;
  height: 95%;
  padding: 45px 20px;
  width: 35%;
`;
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 45px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-bottom: 20px;
  }
`;

const Loginbtn = styled(Button)`
  text-transform: none;
  background-color: #fb6419;
  color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #b03b01;
  }
`;
const Requestbtn = styled(Button)`
  text-transform: none;
  background-color: #fff;
  color: #2874f0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
`;

const Text = styled(Typography)`
  font-size: 12px;
`;

const AccText = styled(Typography)`
  font-size: 12px;
  color: #2874f0;
  padding-top: 10px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
`;

const initialValues = {
  login: {
    view: "login",
  },
  signup: {
    view: "signup",
  },
};

const signupinitialvalues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const logininitialvalues ={
  username: "",
  password: ""
}

const LoginDialog = (props) => {

  const [account, toggleaccount] = useState(initialValues.login);
  const [signup, setsignup] = useState(signupinitialvalues);
  const [login, setlogin] = useState(logininitialvalues);

  const { SetUseraccount } = useContext(DataContext);

  const handleClose = () => {
    props.setOpen(false);
    toggleaccount(initialValues.login);
  };

  const togglesignup = () => {
    toggleaccount(initialValues.signup);
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setsignup({ ...signup, [name]: value });
  };

  const onValueChange= (e) => {
    const { name, value } = e.target;
    setlogin({ ...login, [name]: value });
  }


  const signupuser = async () => {
    console.log(signup);
    const response = await authenticatesignup(signup);
    if (response.status === 200) {
      handleClose();
      SetUseraccount(signup.firstname);
    }
    else{
      alert("Username already exists");
    }
  };

  const loginUser = async () => {
    console.log(login);
    const response = await authenticatelogin(login);
    if (response.status === 200) {
      handleClose();
      SetUseraccount(response.data.data.firstname);
    }
    else{
      alert("Invalid username or password");
    }
  }

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      {account.view === "login" ? (
        <Component>
          <Image>
            <Typography
              variant="h4"
              style={{ color: "white", marginTop: "20px" }}
            >
              Login
            </Typography>
            <Typography style={{ color: "white", marginTop: "20px" }}>
              Get access to your Orders, Wishlist and Recommendations
            </Typography>
          </Image>
          <Wrapper>
            <TextField variant="standard"   onChange={(e) => onValueChange(e)}
              name="username" label="Enter username" />
            <TextField variant="standard" onChange={(e) => onValueChange(e)}
              name="password" label="Enter Password" />
            <Text>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </Text>
            <Loginbtn onClick={()=>loginUser()}>Login</Loginbtn>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <Requestbtn>Request Otp</Requestbtn>
            <AccText onClick={() => togglesignup()}>
              New to Flipkart? Create an account
            </AccText>
          </Wrapper>
        </Component>
      ) : (
        <Component>
          <Image>
            <Typography
              variant="h4"
              style={{ color: "white", marginTop: "20px" }}
            >
              Signup
            </Typography>
            <Typography style={{ color: "white", marginTop: "20px" }}>
              New here, create your account
            </Typography>
          </Image>
          <Wrapper>
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="firstname"
              label="Enter Firstname"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="lastname"
              label="Enter Lastname"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="username"
              label="Enter Username"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="email"
              label="Enter Email"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="password"
              label="Enter Password"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="phone"
              label="Enter Phone Number"
            />

            <Text>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </Text>
            <Loginbtn onClick={() => signupuser()}>Continue</Loginbtn>
          </Wrapper>
        </Component>
      )}
    </Dialog>
  );
};

export default LoginDialog;
