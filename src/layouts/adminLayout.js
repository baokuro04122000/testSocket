import SideMenu from './sideMenu/sideMenuComponent';
import Header from './header/headerComponent'; 
import Footer from './footer/footerComponent';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';
const { Content } = Layout;
const LayoutAdmin = ({component:Component, rest}) =>  {
  

    return (
      <Layout hasSider="true" style={{ minHeight: '100vh' }}>
        {/* import side menu */}
        <SideMenu/>
        
        <Layout className="site-layout">
        <Header/>

        {/* router of the content menu */}
          <Route {...rest} render={routerProps=>(
          <Content style={{ margin: '20px 16px',
                            background:'#ffffff' }} >
            <Component {...routerProps}/>
          </Content>)} />
          <Footer/>
        </Layout>
      </Layout>
    );
}

export default LayoutAdmin;