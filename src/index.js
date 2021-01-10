import React from "react";
import { render } from "react-dom";

function Hi() {
  return (
    <>
      <p>Yo!!!!!</p>
    </>
  );
}

render(<Hi />, document.querySelector("#myApp"));
