import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, BulbOutlined, MenuOutlined } from '@ant-design/icons';
import logoIcon from '../images/Bing_logo.png';
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
    <div className="nav-container">
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
  );
};
export default Navbar;
