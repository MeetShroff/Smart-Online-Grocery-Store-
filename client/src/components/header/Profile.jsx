import { Box, Typography, Menu ,MenuItem , styled} from "@mui/material";
import React from "react";
import { useContext ,useState } from "react";
import { DataContext } from "../../context/DataProvider";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)`
 margin-top: 5px;
`;

const Profile = () => {
  const { Useraccount , SetUseraccount } = useContext(DataContext);

  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
         setOpen(event.currentTarget);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const Logout = () => {
    SetUseraccount('');

  }



  return (
    <>
      <Box onClick={handleClick} style={{cursor:"pointer"}}>
        <Typography>{Useraccount}</Typography>
        <Component
          anchorEl={open}
          open={Boolean(open) }
          onClose={handleClose}
        >
          <MenuItem  onClick={()=>{handleClose(); Logout();}}><PowerSettingsNewIcon color="error" fontSize="small" />&nbsp;Logout</MenuItem>
        </Component>
      </Box>
    </>
  );
};

export default Profile;
