// importing React from react for build a component
// This index.js file is a entry point of our javascript code!

import React from "react";
// ReactDom used for render the first component of our project
import ReactDom from "react-dom";

// This component called stateless functional component or dumped component.
// Always return JXS
function Greeting() {
	return (
		<div>
			<h1>Hello, The Dz! </h1>
			<Person />
			<Message />
		</div>
	);
}

// Arrow function with implicit return
const Person = () => <h3>Person function!</h3>;

// Arrow function with explicit return
const Message = () => {
	return <h3>Message function!</h3>;
};

// arguments are what is the component which you wants to render and where to render
// we have <div id = "root"></div> in index.html which is main .html file in public folder
ReactDom.render(<Greeting />, document.getElementById("root"));

// This is one more method without JSX that we can fire html tage.
// const Greeting = () => {
// 	return (React.createElement('h1', {}, 'Hello World!'));
// }

// Now if we want to add parent and child tag by using this method then
// const Greeting = () => {
// 	return React.createElement("div", {}, React.createElement("h1", {}, "Hello World"));
// };
