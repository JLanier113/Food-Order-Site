import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>Great food, right at your doorstep!</h2>
      <p>
        Choose what you want from our menu below and have a great meal delivered
        to you within 30 minutes.
      </p>
    </section>
  );
};

export default MealsSummary;
