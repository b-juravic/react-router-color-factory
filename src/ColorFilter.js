import React from 'react';
import { useParams } from "react-router-dom";
import ColorList from './ColorList';

function ColorFilter() {

  const { color } = useParams();
  return <ColorList filterColor={color} />

}

export default ColorFilter;