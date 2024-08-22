import { Fragment } from "react/jsx-runtime";
import { HomepageHero } from "./hero";
import { TopSellingShoes } from "./top-seller";

export const Homepage = () => {
  return (
    <Fragment>
      <HomepageHero />
      <TopSellingShoes />
    </Fragment>
  );
};
