import { Switch } from "react-router-dom";
import Route from "./route";
import Home from "../pages/Home";
import ProductPage from "../pages/Product";
import UserProduct from "../pages/UserProducts";
import Profile from "../pages/Profile";
import Login from "../pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route isPublic component={Home} exact path="/" />
      <Route isPublic component={ProductPage} exact path="/product" />
      <Route isPublic component={UserProduct} exact path="/userProduct" />
      <Route isPublic component={Profile} exact path="/profile" />
      <Route isPublic component={Login} exact patch="/login" />
    </Switch>
  );
};

export default Routes;
