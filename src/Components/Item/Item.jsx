import React from "react";
import css from "./Item.module.css";

export function Item({ title, symbol, keywords }) {
  return (
    <div className={css.item}>
      <div className={css.item__emoji}>{symbol}</div>
      <p className={css.item__title}>{title}</p>
      <p className={css.item__info}>{keywords}</p>
    </div>
  );
}
