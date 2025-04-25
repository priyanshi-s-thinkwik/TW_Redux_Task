import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Button } from "@mui/material";
import { useAppDispatch } from "./redux-toolkit/hooks";
import { logout } from "./redux-toolkit/authSlice";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_KEYS } from "./helpers/enums";

export default function ButtonAppBar() {
  const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.LOGIN_USER ) as string);
  const email = user.email;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <AppBar position="static" sx={{ width: "100vw", marginTop: "0px" }}>
      <Toolbar>
        <Button color="inherit">{email ? email : ""}</Button>
        <Box sx={{ flexGrow: 1 }} />

        <Button
          variant="outlined"
          color="inherit"
          size="small"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
