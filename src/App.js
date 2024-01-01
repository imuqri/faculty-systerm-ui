import React, { useState } from "react";
import { Layout, theme } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/layouts/Sidebar";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import AppRoutes from "./routes/AppRoutes";

const { Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          collapsedWidth="0"
        >
          <Sidebar collapsed={collapsed} />
        </Sider>
        <Layout>
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <AppRoutes />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
