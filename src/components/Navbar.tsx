import { useState, useEffect } from 'react';

import logoIcon from '../images/Bing_logo.png';
import { AppBar, Avatar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
interface Size {
  width: number | undefined;
  height: number | undefined;
}

const Navbar = () => {
  const [ScreenSize, setScreenSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });
  const [ActiveMenu, setActiveMenu] = useState(true);

  useEffect(() => {
    const handleResize = () =>
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [ScreenSize]);
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Avatar alt="logo" src={logoIcon} sx={{ width: 35, height: 35 }} />
        <Typography
          variant="h5"
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
/* <div className="nav-container">
  <div className="logo-container">
    <Avatar src={logoIcon} size="large" />
    <Typography.Title level={2} className="logo">
      <Link to="/">News</Link>
    </Typography.Title>
    <Button
      className="menu-control-container"
      onClick={() => setActiveMenu(!ActiveMenu)}
    >
      <MenuOutlined />
    </Button>
  </div>
  {ActiveMenu && (
    <Menu theme="dark">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>

      <Menu.Item key="news" icon={<BulbOutlined />}>
        <Link to="/news">News</Link>
      </Menu.Item>
    </Menu>
  )}
</div>
 */
