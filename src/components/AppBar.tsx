import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {  Button } from '@mui/material';
import { useAppDispatch } from './redux-toolkit/hooks';
import { logout } from './redux-toolkit/authSlice';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {

    const user = JSON.parse(localStorage.getItem('loginUser') as string);
    const email = user.email;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();    
    const handleLogout = ()=>{
        dispatch(logout());
        navigate('/login');
        
    }
    
  return (
   
      <AppBar position="static" sx={{width:'100vw', marginTop:'0px'}} >
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
        
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Users
          </Typography>
          <Button color="inherit">{email ? email :''}</Button>
          <Button variant="outlined" color='inherit' size='small' onClick={handleLogout}>Logout</Button>         
        </Toolbar>
      </AppBar>
    
  );
}
