import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

export const ShoesRoot = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};
