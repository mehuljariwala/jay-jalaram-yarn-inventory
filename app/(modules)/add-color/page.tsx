"use client";
import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/joy";
import ColorPicker from "material-ui-color-picker";
import {
  ColorLensOutlined,
  ColorLensSharp,
  Colorize,
  RouteRounded,
} from "@mui/icons-material";

const Page = () => {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <Stack spacing={1}>
        <FormLabel>Color Name</FormLabel>
        <FormControl
          sx={{ display: { sm: "flex-column", md: "flex-row" }, gap: 2 }}
        >
          <Input startDecorator={<ColorLensOutlined />} />
        </FormControl>
      </Stack>

      <FormControl>
        <FormLabel>Color Code</FormLabel>
        <ColorPicker
          variant="outlined"
          size="small"
          name="color"
          defaultValue="#000"
          // value={this.state.color} - for controlled component
          onChange={(color) => console.log(color)}
        />
      </FormControl>

      <FormControl
        sx={{ display: { sm: "flex-column", md: "flex-row" }, gap: 2 }}
      >
        <FormLabel>Color Category</FormLabel>
        <Box>
          <RadioGroup name="radio" defaultValue="3-star">
            <Radio label="3 STAR" value="3-star" />
            <Radio label="5 STAR" value="5-star" />
            <Radio label="YARN" value="yarn" />
          </RadioGroup>
        </Box>
      </FormControl>

      <Button>Submit</Button>
    </Stack>
  );
};

export default Page;
