import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import ColorList from "./ColorList";
import ColorFilter from "./ColorFilter";
import NewColorForm from "./NewColorForm";

function Routes() {

  

  return (
    <Switch>
      <Route exact path="/colors">
        <ColorList />
      </Route>
      <Route exact path="/colors/:color">
        <ColorFilter />
      </Route>
      <Route exact path="/colors/new">
        <NewColorForm />
      </Route>
      <Redirect to="/colors" />  
    </Switch>
  )

}

export default Routes;