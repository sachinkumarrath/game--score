import React from "react";
import {
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

export default function PointTable({pointsTableData}) {
  return (
    <TableContainer className="point-table-container" component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Points</TableCell>
            <TableCell>Score For</TableCell>
            <TableCell>Score Against</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pointsTableData.map(pointData => <TableRow>
          <TableCell>{pointData.name}</TableCell>
          <TableCell>{pointData.points}</TableCell>
            <TableCell>-</TableCell>
            <TableCell>-</TableCell>
          </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
