import React, {useState, createElement} from 'react';
import {Menu, Layout} from 'antd';
import {Link, useLocation} from 'react-router-dom';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PhoneOutlined,
    SendOutlined,
    UnorderedListOutlined,
    HistoryOutlined,
    ApiOutlined,
    HomeOutlined
} from '@ant-design/icons';
const {Sider} = Layout;
export default function MenuComponent() {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
  
    const toggle = () => {
      setCollapsed(!collapsed);
    };
    return (
    <>
        <Sider style={{ minHeight: '100vh' }} trigger={null} collapsible collapsed={collapsed}>
            <div className={collapsed ? "ant-pro-sider-logo-edit" : "ant-pro-sider-logo"} >
                <a>
                <img  src="https://preview.pro.ant.design/static/logo.f0355d39.svg" alt="logo"  />
                <h1>Ant Design Pro</h1>
                </a>
            </div>
            <Menu theme="dark"
            className={collapsed ? "edit-menu-antd-small" : 'edit-menu-antd'}
            mode="inline" defaultSelectedKeys={[location.pathname]} >
            <Menu.Item key="/home" icon={<HomeOutlined />}>
            Home
            <Link to='/home' />
            </Menu.Item>
            <Menu.Item key="/devices" icon={<PhoneOutlined />}>
            Devices
            <Link to='/devices' />
            </Menu.Item>
            <Menu.Item key="/sender" icon={<SendOutlined />}>
            Sender
            <Link to="/sender" />
            </Menu.Item>
            <Menu.Item key="/phones" icon={<UnorderedListOutlined />}>
            Phones
            <Link to="/phones" />
            </Menu.Item>
            <Menu.Item key="/history" icon={<HistoryOutlined />}>
            Histories
            <Link to="/history" />
            </Menu.Item>
            <Menu.Item key="/testApi" icon={<ApiOutlined />}>
            Test Api
            <Link to="/testApi" />
            </Menu.Item>
        </Menu>
        {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className:`${collapsed ? 'ant-pro-sider-links-edit trigger':'ant-pro-sider-links trigger'}`,
            onClick: ()=>toggle(),
        })}  
            
        </Sider>
        
    </>
    )
}
