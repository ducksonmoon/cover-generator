import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import SizePicker from "../SizePicker/SizePicker";
import ColorPicker from "../ColorPicker/ColorPicker";

import { PlatformModel } from "../SizePicker/Platform.model";
import { ColorDataModel } from "../ColorPicker/ColorPicker.model";
import "./Generator.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Generator() {
  const [size, setSize] = useState({ width: "", height: "" });
  const [backgroundColor, setBackgroundColor] = useState("");

  const setPlatformSize = (platform: PlatformModel) => {
    setSize({
      width: platform.width,
      height: platform.height,
    });
  };

  const setColor = (colorData: ColorDataModel) => {
    setBackgroundColor(
      `linear-gradient(${colorData.direction}, ${colorData.firstColor}, ${colorData.secondColor}, ${colorData.thirdColor})`
    );
  };

  return (
    <main>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <ColorPicker handleColorChange={setColor} />
        </Grid>
        <Grid item xs={8}>
          <SizePicker handlePlatformSize={setPlatformSize} />
        </Grid>
      </Grid>

      <Box
        component="span"
        sx={{
          p: 2,
          border: "1px dashed grey",
          overflow: "scroll",
          boxShadow: 2,
          m: 1,
          borderRadius: 2,
          textAlign: "center",
          zoom: "70%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          id="preview"
          sx={{
            width: size.width,
            height: size.height,
            background: backgroundColor,
          }}
        ></Box>
      </Box>
    </main>
  );
}
