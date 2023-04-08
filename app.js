const heading1 = React.createElement(
  "h1",
  { id: "title" },
  "Hello Everyone in H1 !!!"
);
const heading2 = React.createElement(
  "h2",
  { id: "title" },
  "Hello Everyone in H2 !!!"
);
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
//console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing react element inside the root
root.render(container);
