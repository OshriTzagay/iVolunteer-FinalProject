import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { getDonatersData } from "../../../Services/donaters-service";
import { AddDonater } from "../../../Services/donaters-service";
import { DeleteDonater } from "../../../Services/donaters-service";
import "./Donaters.css";
import { Navigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const [donaters, setDonaters] = useState([]);

  useEffect(() => {
    getDonatersData().then((res) => setDonaters(res));
  }, []);

  const [donaterToAdd, setDonaterToAdd] = useState({});
  const [donaterToDelete, setDonaterToDelete] = useState({});

  const changingTheValue = (e) => {
    donaterToAdd[e.target.name] = e.target.value;
  };

  const AddDonaterFunc = (e) => {
    // e.preventDefault();
    setDonaterToAdd({ ...donaterToAdd });
    console.log(donaterToAdd);
    AddDonater(donaterToAdd);
    alert("Added Donater");
    Navigate("/");
  };
  const DeleteDonaterFunc = (donaterId) => {
    DeleteDonater(donaterId);
    alert("DELETED Donater!");
  };

  return (
    <div className="donatersContainer">
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 700, minHeight: 700 }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell className="table-header" align="right">
                About
              </StyledTableCell>
              <StyledTableCell className="table-header" align="right">
                DonateSince
              </StyledTableCell>
              <StyledTableCell className="table-header" align="right">
                WhyDonate
              </StyledTableCell>
              <StyledTableCell className="table-header" align="right">
                DonateSum
              </StyledTableCell>
              <StyledTableCell className="table-header" align="right">
                Delete
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {donaters.map((don) => (
              <StyledTableRow key={don.Name}>
                <StyledTableCell component="th" scope="row">
                  {don.Name}
                </StyledTableCell>
                <StyledTableCell align="right">{don.About}</StyledTableCell>
                <StyledTableCell align="right">
                  {don.DonateSince}
                </StyledTableCell>
                <StyledTableCell align="right">
                  "{don.WhyDonate}"
                </StyledTableCell>
                <StyledTableCell align="right" className="tableCell">
                  {don.DonateSum}$
                </StyledTableCell>
                <StyledTableCell align="right">
                  <DeleteIcon
                    onClick={() => {
                      DeleteDonaterFunc(don._id);
                    }}
                    className="delete-btn"
                  ></DeleteIcon>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="AddDonaterForm">
        <h1>Add Donater</h1>
        <form
          onSubmit={AddDonaterFunc}
          action="AddDonaterForm"
          className="the-form"
          style={{
            border: "1px solid black",
            textAlign: "center",
            width: "400px",
            height: "auto",
          }}
        >
         
          <TextField className="donatorsInputs"
            label="Donater Name"
            placeholder="Enter Donater Name"
            name="Name"
            type="text"
            onChange={changingTheValue}
            required
             
          />
         
          <TextField className="donatorsInputs"
            label="About"
            placeholder="About"
            name="About"
            type="text"
            onChange={changingTheValue}
            required
          />
          <TextField className="donatorsInputs"
            label="DonateSince"
            placeholder="year of first donating "
            name="DonateSince"
            type="text"
            onChange={changingTheValue}
            required
          />
         
          <TextField className="donatorsInputs"
            label="Why Donate"
            placeholder="Reason for donation "
            name="WhyDonate"
            type="text"
            onChange={changingTheValue}
            required
          />
        
          <TextField className="donatorsInputs"
            label="How Much Would u like to Donate"
            placeholder="Reason for donation "
            name="DonateSum"
            type="text"
            onChange={changingTheValue}
            required
          />
          
          <Button style={{border:"white 1px solid",width:"200px",height:"50px",boxShadow:"white 1px 2px 3px 1px"}} type="submit">ADD</Button>
        </form>
      </div>
    </div>
  );
}
