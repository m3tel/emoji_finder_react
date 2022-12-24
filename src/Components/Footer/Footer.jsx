import React from "react";
import css from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.footer__line}></div>
        <p className={css.footer__copyright}>2022 © Made with love by me</p>
      </div>
    </footer>
  );
}
