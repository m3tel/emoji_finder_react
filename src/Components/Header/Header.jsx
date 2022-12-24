import React from "react";
import css from "./Header.module.css";

export function Header() {
  return (
    <header>
      <section className={css.header}>
        <h1 className={css.header__title}>Emoji Finder</h1>
        <h2 className={css.header__subtitle}>Find emoji by keywords</h2>
        <input
          className={css.header__input}
          type="text"
          placeholder="Placeholder"
        />
      </section>
    </header>
  );
}
