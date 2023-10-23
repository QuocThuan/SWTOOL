import React, { useEffect } from "react";
import { Select } from "antd";
import axios from "axios";
import { https } from "../../services/config";

const SelectPet = () => {
  useEffect(() => {
    https
      .get("monsters")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="text-center">
      <h2 className="font-bold text-xl my-3 text-left mx-5">Danh sách Pet</h2>
      <Select
        showSearch
        className="w-[1000px]"
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={[
          {
            value: "1",
            label: "Not Identified",
          },
        ]}
      />
    </div>
  );
};

export default SelectPet;
