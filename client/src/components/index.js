import React, { useState } from "react";
import axios from "axios";
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

const StudentRecord = () => {
  const navigate = useNavigate(); 
    const [name, setName] = useState("");
    const [rollNumber, setRollNumber] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
  const Submit = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      stuId: rollNumber,
      email: email,
      phone: phone,
    };
    try {
      await axios.post("http://localhost:5000/", data);
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid style={{ height: "100vh" }}>
      <Paper elevation={20} style={GridStyle}>
        <Grid align="center">
          <Avatar style={{ backgroundColor: "#1bbd7e", margin: 0 }}></Avatar>
          <Typography style={{ margin: 18 }} variant="h6">
            Student Record
          </Typography>
        </Grid>
        <form method="post">
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
              setRollNumber(e.target.value);
            }}
            fullWidth
            label="Roll Number"
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

export default StudentRecord;
