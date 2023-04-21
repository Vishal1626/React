import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is namste react"),
    React.createElement("h2", {}, "I'm an h2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 Tag"),
    React.createElement("h2", {}, "I'm an h2 Tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
