import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

const InfoPet = () => {
  return (
    <>
      <h2 className="text-left font-bold text-xl">Thông tin Pet</h2>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-6">
          <img src="" alt="" />
          <div className="skill">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className="col-span-6">
          <Form.Item label="HP" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="ATK" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="DEF" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="SPD" name="username">
            <Input />
          </Form.Item>
        </div>
      </div>
    </>
  );
};

export default InfoPet;
