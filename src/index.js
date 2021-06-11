// importing React from react for build a component
// This index.js file is a entry point of our javascript code!

import React from "react";
// ReactDom used for render the first component of our project
import ReactDom from "react-dom";

// This component called stateless functional component or dumped component.
// Always return JXS
function BookList() {
	return (
		<section>
			<Book />
		</section>
	);
}

const Book = () => {
	return (
		<article>
			<Image />
			<Title />
			<Author />
		</article>
	);
};

const Image = () => {
	return <img src="https://m.media-amazon.com/images/I/51NhBr756lL._AC_UY327_FMwebp_QL65_.jpg" alt="" />;
};

const Title = () => {
	return <h3>Out There: A Scientific Guide to Alien Life, Antimatter, and Human Space Travel (For the Cosmically Curious)</h3>;
};

const Author = () => {
	return <h3>by Michael Wall and Karl Tate | 13 November 2018</h3>;
};
// // Arrow function with implicit return
// const Person = () => <h3>Person function!</h3>;

// // Arrow function with explicit return
// const Message = () => {
// 	return <h3>Message function!</h3>;
// };

// arguments are what is the component which you wants to render and where to render
// we have <div id = "root"></div> in index.html which is main .html file in public folder
ReactDom.render(<BookList />, document.getElementById("root"));

// This is one more method without JSX that we can fire html tage.
// const Greeting = () => {
// 	return (React.createElement('h1', {}, 'Hello World!'));
// }

// Now if we want to add parent and child tag by using this method then
// const Greeting = () => {
// 	return React.createElement("div", {}, React.createElement("h1", {}, "Hello World"));
// };
