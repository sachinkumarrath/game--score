import React, { Fragment } from "react";
import PointTable from "./PointTable";
import { Select, MenuItem, InputLabel } from "@material-ui/core";

export default function ScorePage() {
  return (
    <Fragment>
      <InputLabel id="point-table-select">Select Point Table</InputLabel>
      <Select labelId="point-table-select">
        <MenuItem value="pistol">Pistol</MenuItem>
        <MenuItem value="sniper">Sniper</MenuItem>
        <MenuItem value="rifel">Rifer</MenuItem>
        <MenuItem value="iceworld">Ice World</MenuItem>
        <MenuItem value="overall">Over All</MenuItem>
      </Select>
      <PointTable></PointTable>
    </Fragment>
  );
}
