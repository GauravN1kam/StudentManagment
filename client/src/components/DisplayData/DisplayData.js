import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const DisplayData = () => {
  const [data, setData] = useState([{}]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((data) => setData(data.students));
  }, []);
  const deleteStudent = async (stuId) => {
    try {
      await fetch(`http://localhost:8000/${stuId}`, {
        method: "DELETE",
      });
      setData(data.filter((student) => student.stuId !== stuId));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <TableContainer
        align="center"
        justify="center"
        elevation={20}
        sx={{
          minWidth: "75%",
          maxHeight: "75%",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Sudent Details
        </Typography>
        <Table
          component={Paper}
          elevation={20}
          aria-label="simple table"
          sx={{ width: "75%" }}
          stickyHeader
        >
          <TableHead>
            <TableRow style={{
              backgroundColor: "#1bbd7e",
            }}>
              <TableCell align="center">Roll Number</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((student) => (
              <TableRow key={student.stuId}>
                <TableCell align="center">{student.stuId}</TableCell>
                <TableCell align="center">{student.name}</TableCell>
                <TableCell align="center">{student.email}</TableCell>
                <TableCell align="center">{student.phone}</TableCell>
                <TableCell align="center">
                  <Button
                    color="success"
                    onClick={() => {
                      navigate(`/EditStudent/${student.stuId}`);
                    }}
                  >
                    {<AddCircleIcon />}
                  </Button>
                  <Button
                    color="error"
                    onClick={() => {
                      deleteStudent(student.stuId);
                    }}
                  >
                    {<RemoveIcon />}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button
          variant="contained"
          color="success"
          startIcon={<AddIcon />}
          onClick={() => {
            navigate("/AddStudent");
          }}
        >
          Add New Student
        </Button>
      </TableContainer>
    </div>
  );
};

export default DisplayData;
