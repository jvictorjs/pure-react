const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: 'name_' + props.name}, props.name), 
    React.createElement("p", { key: 'occ_' + props.occupation}, props.occupation)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { className: "title", key: 1}, "React IS rendered"),
    React.createElement(Person, { name: "Joao", occupation: "developer", key: 2 }, null),
    React.createElement(Person, { name: "Andrei", occupation: "Lead Instructor",key: 3 }, null),
    React.createElement(Person, { name: "Emily", occupation: "teacher",key: 4 }, null),
  ]);
};

// ReactDOM.render(React.createElement(App), document.getElementById('root'))
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App), container);
