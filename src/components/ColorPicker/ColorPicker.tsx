import React, { useState } from "react";
import { ColorDataModel } from "./ColorPicker.model";
import "./ColorPicker.css";

export default function ColorPicker(props) {
  const [selectedColor, setSelectedColor] = useState();

  const colors: Array<ColorDataModel> = [
    {
      direction: "to right",
      firstColor: "rgb(236, 72, 153)",
      secondColor: "rgb(239, 68, 68)",
      thirdColor: "rgb(234, 179, 8)",
      css: "linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))",
    },
    {
      direction: "to right",
      firstColor: "rgb(134, 239, 172)",
      secondColor: "rgb(59, 130, 246)",
      thirdColor: "rgb(147, 51, 234)",
      css: "linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))",
    },
    {
      direction: "to right",
      firstColor: "rgb(249, 168, 212)",
      secondColor: "rgb(216, 180, 254)",
      thirdColor: "rgb(129, 140, 248)",
      css: "linear-gradient(to right, rgb(249, 168, 212), rgb(216, 180, 254), rgb(129, 140, 248))",
    },
    {
      direction: "to right",
      firstColor: "rgb(55, 65, 81)",
      secondColor: "rgb(17, 24, 39)",
      thirdColor: "rgb(0, 0, 0)",
      css: "linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))",
    },
    {
      direction: "to right",
      firstColor: "rgb(199, 210, 254)",
      secondColor: "rgb(254, 202, 202)",
      thirdColor: "rgb(254, 249, 195)",
      css: "linear-gradient(to right, rgb(199, 210, 254), rgb(254, 202, 202), rgb(254, 249, 195))",
    },
    {
      direction: "to right",
      firstColor: "rgb(254, 249, 195)",
      secondColor: "rgb(253, 224, 71)",
      thirdColor: "rgb(234, 179, 8)",
      css: "linear-gradient(to right, rgb(254, 249, 195), rgb(253, 224, 71), rgb(234, 179, 8))",
    },
  ];

  const makeCssGradianat = (colorData: ColorDataModel) => {
    return `linear-gradient(${colorData.direction}, ${colorData.firstColor}, ${colorData.secondColor}, ${colorData.thirdColor})`;
  };

  const handleGradiantClick = (colorData: ColorDataModel) => {
    props.handleColorChange(colorData);
    setSelectedColor(colorData as any);
  };

  return (
    <div>
      {colors.map((item, index) => (
        <span
          key={index}
          style={{ background: makeCssGradianat(item), cursor: "pointer" }}
          className="dot"
          onClick={() => handleGradiantClick(item)}
        ></span>
      ))}
    </div>
  );
}
