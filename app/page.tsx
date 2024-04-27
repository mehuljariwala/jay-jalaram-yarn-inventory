"use client";
import { AddOutlined } from "@mui/icons-material";
import { Box, Button, Tab, TabList, TabPanel, Tabs } from "@mui/joy";
import React from "react";

export default function Index() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs aria-label="Basic tabs" defaultValue={0}>
          <TabList>
            <Tab>Required</Tab>
            <Tab>Delivered</Tab>
            <Tab>Pending</Tab>
            <Tab>Completed</Tab>
          </TabList>
          <TabPanel value={0}>
            <b>First</b> tab panel
          </TabPanel>
          <TabPanel value={1}>
            <b>Second</b> tab panel
          </TabPanel>
          <TabPanel value={2}>
            <b>Third</b> tab panel
          </TabPanel>
          <TabPanel value={3}>
            <b>Third</b> tab panel
          </TabPanel>
        </Tabs>
      </Box>
      <Box
        sx={{
          position: "absolute",
          transform: "translate(-50%, -50%)",
          left: "50%",
          bottom: "5%",
        }}
      >
        <Button sx={{ boxShadow: 2 }} startDecorator={<AddOutlined />}>
          New Order
        </Button>
      </Box>
    </div>
  );
}
