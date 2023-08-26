import { useRef, useState } from "react";
import { Box, Grid, TextField, Typography, Button, Stack } from "@mui/material";
import { toPng } from "html-to-image";

import SizePicker from "../SizePicker/SizePicker";
import ColorPicker from "../ColorPicker/ColorPicker";

import { PlatformModel } from "../SizePicker/Platform.model";
import { ColorDataModel } from "../ColorPicker/ColorPicker.model";
import "./Generator.css";

export default function Generator() {
  const [size, setSize] = useState({ width: "", height: "" });
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textInput, setTextInput] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  let imageResult = useRef<any>();

  function handleTextInputChange(element) {
    setTextInput(element.currentTarget.value);
  }

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

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const showSelectedImage = (() =>
    selectedImage && (
      <img
        alt="not found"
        width={"250px"}
        src={URL.createObjectURL(selectedImage)}
        className="image--cover"
      />
    ))();

  const downloadResult = () => {
    if (imageResult.current === null) {
      return;
    }

    toPng(imageResult.current, { cacheBust: true })
      .then((dataUrl) => {
        debugger;
        const link = document.createElement("a");
        link.download = "cover.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main
      style={{
        marginLeft: "5%",
        marginRight: "5%",
        borderRadius: '10px',
        backgroundColor: "white",
        padding: 16,
      }}
    >
      <section>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            marginBottom: 2,
            direction: "rtl",
          }}
        >
          <Button
            color="secondary"
            size="medium"
            variant="contained"
            onClick={downloadResult}
          >
            Download Result
          </Button>
        </Stack>

        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <ColorPicker handleColorChange={setColor} />
          </Grid>
          <Grid item xs={8}>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <SizePicker handlePlatformSize={setPlatformSize} />
              <Button color="primary" size="large" component="label">
                Upload Photo
                <input
                  type="file"
                  name="myImage"
                  onChange={handleImageChange}
                  hidden
                />
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <TextField
          label="Text"
          variant="outlined"
          value={textInput}
          onChange={handleTextInputChange}
          sx={{
            width: "100%",
            marginTop: 2,
          }}
        />
      </section>

      <Box
        sx={{
          border: "1px dashed grey",
          overflow: "scroll",
          boxShadow: 2,
          marginTop: 2,
          paddingBlock: 3,
          borderRadius: 2,
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          ref={imageResult}
          id="preview"
          sx={{
            width: size.width,
            height: size.height,
            background: backgroundColor,
          }}
        >
          <Box sx={{ m: 4 }}>{showSelectedImage}</Box>
          <Typography
            sx={{
              fontWeight: "bolder",
              fontSize: "xx-large",
              lineBreak: "anywhere",
              m: 3,
            }}
          >
            {textInput}
          </Typography>
        </Box>
      </Box>
    </main>
  );
}
