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

    setDonaterToAdd({ ...donaterToAdd });
    AddDonater(donaterToAdd);
    window.location.reload()
    
  };
  const DeleteDonaterFunc = (donaterId) => {
    DeleteDonater(donaterId);
    alert("DELETED Donater!");
    window.location.reload()
    
  };

  return (
    <div className="donatersContainer">
     <h1 className="donation-header">Donations Table</h1>
      <TableContainer className="donatorTable" component={Paper}> 
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
        <h1 className="donation-form-header">Add Donater</h1>
        <form
          
          action="AddDonaterForm"
          className="the-form"
        >
        
          <TextField className="donatorsInputs"
            label="Donater Name"
            placeholder="Enter Donater Name"
            name="Name"
            type="text"
            onChange={changingTheValue}
            required
          />
         <br/>
          <TextField className="donatorsInputs"
            label="About"
            placeholder="About"
            name="About"
            type="text"
            onChange={changingTheValue}
            required
          />
          <br/>
          <TextField className="donatorsInputs"
            label="DonateSince"
            placeholder="year of first donating "
            name="DonateSince"
            type="text"
            onChange={changingTheValue}
            required
          />
          <br/>
          <TextField className="donatorsInputs"
            label="Why Donate"
            placeholder="Reason for donation "
            name="WhyDonate"
            type="text"
            onChange={changingTheValue}
            required

          />
         <br/>
          <TextField className="donatorsInputs"
            label="How Much Would u like to Donate"
            placeholder="Reason for donation "
            name="DonateSum"
            type="text"
            onChange={changingTheValue}
            required

          />
           <br/>
          <Button type="button" onClick={AddDonaterFunc}>Add Donater!</Button>
        </form>
      </div>
      <div className="spaceDiv"></div>
    </div>
  );
}
