import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
const GridStyle = {
  padding: "30px 20px",
  width: 300,
  margin: "20px auto",
  backgroundColor: "#fff",
};

const EditStudent = () => {
  const navigate = useNavigate();
  const { stuId } = useParams();
  const Submit = async (e) => {
    e.preventDefault();
    const data = {};
    if (name !== "") {
      data.name = name;
    }
    if(email !== ""){
        data.email = email;
    }
    if(phone !== ""){
        data.phone = parseInt(phone);
    }
    try {
      await fetch(`http://localhost:8000/${stuId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      navigate("/");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <Grid style={{ height: "100vh" }}>
      <Paper elevation={20} style={GridStyle}>
        <Grid align="center">
          <Avatar style={{ backgroundColor: "#1bbd7e", margin: 0 }}></Avatar>
          <Typography style={{ margin: 18 }} variant="h6">
            Student Record
          </Typography>
        </Grid>
        <form method="patch">
          <TextField
            style={{ margin: 5 }}
            onChange={(e) => {
              setName(e.target.value);
            }}
            fullWidth
            label="Name"
          />
          <TextField
            style={{ margin: 5 }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            fullWidth
            label="Email"
          />
          <TextField
            style={{ margin: 5 }}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            fullWidth
            label="Phone"
          />
          <Button
            align="center"
            type="submit"
            color="primary"
            variant="contained"
            onClick={Submit}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default EditStudent;
