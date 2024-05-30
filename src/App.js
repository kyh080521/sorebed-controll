import React, { useState } from 'react'; // eslint-disable-line no-unused-vars

import style from "./styles/App.module.css"
import WardState from "./components/wardState.js";

function App() {
  return (
    <div className={style.App}>
      <div className={style.WardStateContainer}>
        <WardState />
      </div>
    </div>
  );
}

export default App;
