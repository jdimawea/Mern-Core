// import dependencies
import {BrowserRouter, Switch, Route} from "react-router-dom"
import EditProduct from "./views/EditProduct";
import Main from "./views/Main";
import OneProduct from "./views/OneProduct";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"> 
          <Main />
        </Route>
        <Route exact path="/products/:id">
          <OneProduct />
        </Route>
        <Route exact path="/products/:id/edit">
          <EditProduct />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
