import React, { useState } from "react";
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
  Menu,
  MenuItem,
} from "@mui/material";

import { MoreVert } from "@mui/icons-material";

const Import = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e, makeId) => {
    setAnchorEl(e.currentTarget);
  };

  const handleDelete = (index) => {
    props.removeMake(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <br></br>
      <br></br>
      <Button variant="contained" color="primary" onClick={props.fetchMakes}>
        Import
      </Button>
      <h2>COUNT: {props.makes.length}</h2>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((make, idx) => (
            <TableRow key={idx}>
              <TableCell>{make.MakeId}</TableCell>
              <TableCell>{make.MakeName}</TableCell>
              <TableCell>
                <MoreVert
                  onClick={(e) => handleClick(e, make.MakeId)}
                ></MoreVert>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </Container>
  );
};

export default Import;
