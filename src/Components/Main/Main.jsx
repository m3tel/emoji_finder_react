import React from "react";
import css from "./Main.module.css";
import { data } from "../../data/emoji.js";
import { Item } from "../Item/Item";

export function Main() {
  return (
    <main className={css.main}>
      <div className="container">
        <div className={css.grid}>
          {data.map((item) => (
            <Item
              key={item.title}
              symbol={item.symbol}
              title={item.title}
              keywords={item.keywords}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
