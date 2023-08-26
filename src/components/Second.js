import React, { useState } from "react";
import classes from "./Second.module.css";



const Second = ({ deletePostHandler, first, editPostHandler }) => {
  return (
    <>
      <div className={classes.result}>
        <section>
          {first.map((item, index) => (
            <div key={item.id} className={classes.div}>
              <b> Movie name :</b> {item.Mov}
              <b> Director name :</b> {item.dir}
              <b> Rating :</b> {item.rat}
              <button
                className={classes.edit}
                onClick={() => editPostHandler(item.id)}
              >
                Edit
              </button>
              <button
                className={classes.delete}
                onClick={() => deletePostHandler(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Second;
