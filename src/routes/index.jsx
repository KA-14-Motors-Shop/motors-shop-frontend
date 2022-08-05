import { Switch } from "react-router-dom";
import Route from "./route";
import ProductCard from "../components/Cards/ProductCard";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route isPublic component={Home} exact path="/" />
      <Route isPublic component={ProductCard} exact path="/login" />
    </Switch>
  );
};

export default Routes;
