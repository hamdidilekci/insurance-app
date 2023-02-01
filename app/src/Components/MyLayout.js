import { Layout, Menu } from 'antd';
import React from 'react';
import MyForm from './MyForm';

const { Header, Content, Footer } = Layout;

const items1 = ['Anasayfa', 'Hakkımızda', 'İletişim'].map((key) => ({
    key,
    label: `${key}`,
}));

const MyLayout = () => {
    return (
        <div className='image'>
            <Layout className='container'>
                <Header className="header">
                    <Menu
                        className='menu'
                        theme='dark'
                        mode="horizontal"
                        defaultSelectedKeys={['Anasayfa']}
                        items={items1}
                    />
                </Header>
                <Content className='content'>
                    <MyForm />
                </Content>
                <Footer className='footer'>
                    ©2023 Created by <a href="https://www.linkedin.com/in/dilekcihamdi/">Dilekçi</a>
                </Footer>
            </Layout>
        </div>
        
    );
};
export default MyLayout;