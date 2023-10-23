import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import SelectPet from "../SelectPet/SelectPet";
import ContentArtifact from "../ContentArtifact/ContentArtifact";
const { Header, Content, Footer, Sider } = Layout;

const DashBoard = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="min-h-screen">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <div className="text-white font-bold text-xl">
          <img src="" alt="" /> SW TOOL
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          //   items={[UserOutlined, VideoCameraOutlined, UploadOutlined].map(
          //     (icon, index) => ({
          //       key: String(index + 1),
          //       icon: React.createElement(icon),
          //       label: `nav ${index + 1}`,
          //     })
          //   )}
          items={["Dame Artifact", "Else"].map((item, index) => {
            return {
              key: String(index),
              icon: <></>,
              label: item,
            };
          })}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            height: "fit-content",
          }}
        >
          <SelectPet />
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <ContentArtifact />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashBoard;
