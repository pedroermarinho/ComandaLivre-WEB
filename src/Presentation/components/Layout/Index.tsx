import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, MenuProps } from "antd";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

interface IProps {
    children: React.ReactNode;
}

export const LayoutApp: React.FC<IProps> = ({ children }) => {

    const [collapsed, setCollapsed] = useState(false);

    const items: MenuItem[] = [
        getItem('Option 1', '1', <PieChartOutlined />),
        getItem('Option 2', '2', <DesktopOutlined />),
        getItem('User', 'sub1', <UserOutlined />, [
            getItem('Tom', '3'),
            getItem('Bill', '4'),
            getItem('Alex', '5'),
        ]),
        getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
        getItem('Files', '9', <FileOutlined />),
    ];

    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
        } as MenuItem;
    }

    return <Layout style={ { minHeight: '100vh' } }>
        <Sider collapsible collapsed={ collapsed } onCollapse={ value => setCollapsed(value) }>
            <div style={
                {
                    height: "32px",
                    margin: "16px",
                    background: "rgba(255, 255, 255, 0.3)"
                }
            }/>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout style={{background: "#fff"}}>
            <Header style={ { background: "#fff", padding: 0 } }/>
            <Content  style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, minHeight: 360 , background: "#fff"}}>
                    { children }
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    </Layout>;
}