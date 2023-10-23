import React from "react";
import { InputNumber, Form } from "antd";

const Artifact = () => {
  return (
    <div>
      <h2 className="text-left font-bold text-xl">Artifact</h2>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-6">
          <Form.Item label="Dame HP%" name="username">
            <InputNumber addonAfter="%" style={{ width: "155px" }} />
          </Form.Item>
          <Form.Item label="Dame ATK%" name="username">
            <InputNumber addonAfter="%" style={{ width: "155px" }} />
          </Form.Item>
          <Form.Item label="Dame DEF%" name="username">
            <InputNumber addonAfter="%" style={{ width: "155px" }} />
          </Form.Item>
          <Form.Item label="Dame SPD%" name="username">
            <InputNumber addonAfter="%" style={{ width: "155px" }} />
          </Form.Item>
        </div>
      </div>
      <div>
        <Form.Item label="Dame 1 hit" name="username">
          <InputNumber addonAfter="/hit" style={{ width: "400px" }} />
        </Form.Item>
      </div>
    </div>
  );
};

export default Artifact;
