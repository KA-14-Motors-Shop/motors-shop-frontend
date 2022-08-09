import { Switch } from "react-router-dom";
import Route from "./route";
import ProductCard from "../components/Cards/ProductCard";
import Home from "../pages/Home";
import ProductPage from "../pages/Product";

const Routes = () => {
  return (
    <Switch>
      <Route isPublic component={Home} exact path="/" />
      <Route isPublic component={ProductPage} exact path="/product" />
      <Route isPublic component={ProductCard} exact path="/login" />
    </Switch>
  );
};

export default Routes;
