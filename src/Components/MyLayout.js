import { Layout, Menu } from 'antd';
import React from 'react';
import MyForm from './MyForm';
import Logos from './Logos'

const { Header, Content, Footer } = Layout;

const menuItems = ['Anasayfa', 'Hakkımızda', 'İletişim'].map((key) => ({
    key,
    label: `${key}`,
}));

const MyLayout = () => {
    return (
        <Layout className='container'>
            <Header className="header">
                <Menu
                    theme='dark'
                    mode="horizontal"
                    defaultSelectedKeys={['Anasayfa']}
                    items={menuItems}
                />
            </Header>
            <Content className='content'>
                <MyForm />
            </Content>
            <Footer className='footer'>
                <Logos/>
                <div 
                    style={{ 
                        fontFamily: 'serif', 
                        fontStyle: 'italic', 
                        zoom: '0.6', 
                        color: 'transparent',
                        textShadow: '0 0 1px #000', 
                    }}>
                    ©2023 Created by <a href="https://www.linkedin.com/in/dilekcihamdi/">Dilekçi</a>
                </div>
            </Footer>
        </Layout>
    );
};
export default MyLayout;