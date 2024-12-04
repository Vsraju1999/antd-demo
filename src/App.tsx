import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Flex, Layout, Menu } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import "./App.css";
import { Approval, Dashboard, Projects, Queue } from "./Components";

const { Header, Sider, Content } = Layout;

export const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();

  const items = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Executive Dashboard",
      path: "/",
      className: "custom-menu-item",
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: "Projects",
      path: "/projects",
      className: "custom-menu-item",
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: "My Approval",
      path: "/approval",
      className: "custom-menu-item",
    },
    {
      key: "4",
      icon: <UserOutlined />,
      label: "My Queue",
      path: "/queue",
      className: "custom-menu-item",
    },
  ];

  const handleMenuClick = (path: string) => {
    setCollapsed(true);
    navigate(path);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ padding: 0, background: "currentcolor" }}>
        <Flex>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "white",
            }}
          />
          <Content style={{ color: "white" }}>DanyX</Content>
          <Content
            style={{ color: "white", flex: "none", marginRight: "20px" }}
          >
            DanyX
          </Content>
        </Flex>
      </Header>

      <Layout style={{ position: "relative" }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            position: "absolute",
            zIndex: 1000,
            height: "100%",
            left: 0,
            transition: "transform 0.1s ease",
            transform: collapsed ? "translateX(-100%)" : "translateX(0)",
            background: "white",
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items.map((item) => ({
              ...item,
              onClick: () => handleMenuClick(item.path),
            }))}
            style={{ background: "white" }}
          />
        </Sider>
        <Flex>
          <Content>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/approval" element={<Approval />} />
              <Route path="/queue" element={<Queue />} />
            </Routes>
          </Content>
        </Flex>
      </Layout>
    </Layout>
  );
};
