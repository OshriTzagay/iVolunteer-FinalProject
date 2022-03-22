import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState,useEffect } from 'react';
import {getDonatersData} from '../../../Services/donaters-service'
import "./Donaters.css";


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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function CustomizedTables() {
  const [donaters, setDonaters] = useState([]);
  
  useEffect(() => {
    getDonatersData().then(res=>setDonaters(res));  
  }, []);
  return (
    <div className='donatersContainer'>

    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">About</StyledTableCell>
            <StyledTableCell align="right">DonateSince</StyledTableCell>
            <StyledTableCell align="right">WhyDonate</StyledTableCell>
            <StyledTableCell align="right">DonateSum</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {donaters.map((don) => (
            <StyledTableRow key={don.Name}>
              <StyledTableCell component="th" scope="row">
                {don.Name}
              </StyledTableCell>
              <StyledTableCell align="right">{don.About}</StyledTableCell>
              <StyledTableCell align="right">{don.DonateSince}</StyledTableCell>
              <StyledTableCell align="right">"{don.WhyDonate}"</StyledTableCell>
              <StyledTableCell align="right" className='tableCell'>{don.DonateSum}$</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <form action="AddDonaterForm" style={{border:"1px solid black",textAlign:"center",width:"400px"}}>
      <h1>Add Donater</h1>
     <label htmlFor="">Donater-Name</label><br></br>
     <input type="text" /><br></br>

     <label htmlFor=""></label><br></br>
     <input type="text" />
     <br></br>
     <label htmlFor=""></label><br></br>
     <input type="text" />
     <br></br>
     <button>ADD</button>

    </form>
    </div>
  );
}


//!