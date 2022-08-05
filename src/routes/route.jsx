import { useContext } from "react";
import { AuthContext } from "../providers/auth/index";
import { Redirect, Route as RouteDOM } from "react-router-dom";

const Route = ({
  isPrivate = false,
  isPublic = false,
  component: Component,
  ...rest
}) => {
  const { authenticated } = useContext(AuthContext);
  return (
    <RouteDOM
      {...rest}
      render={() => {
        return isPublic === true ? (
          typeof Component === "function" ? (
            <Component />
          ) : (
            Component
          )
        ) : isPrivate === authenticated ? (
          typeof Component === "function" ? (
            <Component />
          ) : (
            Component
          )
        ) : (
          <Redirect to={isPrivate ? "/login" : "/"} />
        );
      }}
    />
  );
};

export default Route;
