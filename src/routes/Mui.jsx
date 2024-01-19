import React from "react";
import Layout from "../components/Layout";
import { Button, TextField } from "@mui/material";
import { MdDelete } from "react-icons/md";
import { IoSend } from "react-icons/io5";

export default function Mui() {
  return (
    <Layout>
      <div className="w-full flex justify-center py-16">
        <div className="w-[1200px] flex flex-col space-y-4">
          <h1>M Ui test</h1>
          <Button variant="text">Mui Test</Button>
          <Button variant="contained" color="warning">
            Mui Test
          </Button>
          <Button variant="outlined" color="success">
            Mui Test
          </Button>
          <Button variant="outlined" startIcon={<MdDelete />}>
            Delete
          </Button>
          <Button variant="contained" endIcon={<IoSend />}>
            Send
          </Button>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
      </div>
    </Layout>
  );
}
