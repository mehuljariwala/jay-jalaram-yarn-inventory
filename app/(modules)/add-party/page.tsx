import React from "react";
import {
  EmailRounded,
  MobileFriendlyOutlined,
  Person,
  Route,
} from "@mui/icons-material";
import { Button, FormControl, FormLabel, Input, Stack } from "@mui/joy";

const Page = () => {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <Stack spacing={1}>
        <FormLabel>Name</FormLabel>
        <FormControl
          sx={{ display: { sm: "flex-column", md: "flex-row" }, gap: 2 }}
        >
          <Input startDecorator={<Person />} />
        </FormControl>
      </Stack>

      <FormControl>
        <FormLabel>Mobile Number</FormLabel>
        <Input fullWidth startDecorator={<MobileFriendlyOutlined />} />
      </FormControl>
      <FormControl>
        <FormLabel>Route</FormLabel>
        <Input type="text" startDecorator={<Route />} />
      </FormControl>

      <Button>Submit</Button>
    </Stack>
  );
};

export default Page;
