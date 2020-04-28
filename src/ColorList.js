import React, {useState} from 'react';
import Color from "./Color";

import { Redirect, Link } from "react-router-dom";


function ColorList({filterColor}) {

  // const [colors, setColors] = useState([]);

  
  
  const renderColors = () => {

  let colorListHTML = colors.map(c => <li>{c}</li>)
   
    return (
      <div>
      <ul>
        {colorListHTML}
      </ul>
      <Link to="/colors/new">Add a color</Link>
      </div>
    )

  }

  if (filterColor) {

    if (colors.indexOf(filterColor) > -1) {
      return <Color color={filterColor} />
    }
    return <Redirect to="/colors" />
  } else {
    renderColors();
  }

}

export default ColorList;
