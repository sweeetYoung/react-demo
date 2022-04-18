import React from "react";
import state from '../../redux/state';

function Charts() {
  console.log(`state里储存的filterParams：${state.filterParams}`)
  return <p>state里储存的filterParams：{JSON.stringify(state.filterParams)}</p>
}

export default Charts;
