import React, { Fragment, useState, useEffect } from "react";
import PointTable from "./PointTable";
import { Select, MenuItem, InputLabel } from "@material-ui/core";

export default function ScorePage() {
  const [gameSelected, setGameSelected] = useState('overall')
  const [pointsTableData, setPointsTableData] = useState([])

  useEffect(() => {
    fetch('/points').then(res => res.json().then(pointsData => {
      setPointsTableData(pointsData['overall'])
    }))
  }, [])

  function onSelectGame (evt) {
    const selectedGame = evt.target.value
    setGameSelected(selectedGame)
    fetch('/points').then(res => res.json().then(pointsData => {
      setPointsTableData(pointsData[selectedGame]) 
    }))
  }

  return (
    <Fragment>
      <InputLabel id="point-table-select">Select Point Table</InputLabel>
      <Select labelId="point-table-select" onChange={onSelectGame} value={gameSelected}>
        <MenuItem value="pistol">Pistol</MenuItem>
        <MenuItem value="sniper">Sniper</MenuItem>
        <MenuItem value="rifel">Rifer</MenuItem>
        <MenuItem value="iceworld">Ice World</MenuItem>
        <MenuItem value="overall">Over All</MenuItem>
      </Select>
      <PointTable pointsTableData={pointsTableData}></PointTable>
    </Fragment>
  );
}
