import logoIcon from '../images/Bing_logo.png';
import { AppBar, Avatar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Avatar alt="logo" src={logoIcon} sx={{ width: 35, height: 35 }} />
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          News
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
