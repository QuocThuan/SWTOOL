import React from "react";
import { InputNumber, Form } from "antd";

const Totem = () => {
  return (
    <>
      <div className="bg-blue-100 p-3 mb-5 ">
        <h2 className="text-left font-bold text-xl">Totem</h2>
        <div>
          <div className="grid grid-cols-5 text-center mb-3">
            <div className="col-start-1">
              <Form.Item label="SPD" name="username">
                <InputNumber
                  addonAfter="%"
                  style={{ width: "130px" }}
                  defaultValue={15}
                />
              </Form.Item>
            </div>
            <div className="col-start-2">
              <Form.Item label="HP" name="username">
                <InputNumber
                  addonAfter="%"
                  style={{ width: "130px" }}
                  defaultValue={20}
                />
              </Form.Item>
            </div>
            <div className="col-start-3">
              <Form.Item label="DEF" name="username">
                <InputNumber
                  addonAfter="%"
                  style={{ width: "130px" }}
                  defaultValue={20}
                />
              </Form.Item>
            </div>
            <div className="col-start-4">
              <Form.Item label="ATK" name="username">
                <InputNumber
                  addonAfter="%"
                  style={{ width: "130px" }}
                  defaultValue={20}
                />
              </Form.Item>
            </div>
            <div className="col-start-5">
              <Form.Item label="CRITDMG" name="username">
                <InputNumber
                  addonAfter="%"
                  style={{ width: "130px" }}
                  defaultValue={25}
                />
              </Form.Item>
            </div>
          </div>
          <div className="grid grid-cols-5 text-center pb-0">
            <div className="col-start-1">
              <Form.Item label="FIRE ATK" name="username">
                <InputNumber
                  addonAfter="%"
                  style={{ width: "120px" }}
                  defaultValue={21}
                />
              </Form.Item>
            </div>
            <div className="col-start-2">
              <Form.Item label="WATER ATK" name="username">
                <InputNumber
                  addonAfter="%"
                  style={{ width: "120px" }}
                  defaultValue={21}
                />
              </Form.Item>
            </div>
            <div className="col-start-3">
              <Form.Item label="WIND ATK" name="username">
                <InputNumber
                  addonAfter="%"
                  style={{ width: "120px" }}
                  defaultValue={21}
                />
              </Form.Item>
            </div>
            <div className="col-start-4">
              <Form.Item label="LIGHT ATK" name="username">
                <InputNumber
                  addonAfter="%"
                  style={{ width: "120px" }}
                  defaultValue={21}
                />
              </Form.Item>
            </div>
            <div className="col-start-5">
              <Form.Item label="DARK ATK" name="username">
                <InputNumber
                  addonAfter="%"
                  style={{ width: "120px" }}
                  defaultValue={21}
                />
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Totem;
