// importing React from react for build a component
// This index.js file is a entry point of our javascript code!

import React from "react";
// ReactDom used for render the first component of our project
import ReactDom from "react-dom";
// Impoting css file index.css
import "./index.css";

// we are going to pass this variable through props
const allBooks = [
	{
		id: 1,
		img: "https://m.media-amazon.com/images/I/51NhBr756lL._AC_UY327_FMwebp_QL65_.jpg",
		title: "Out There: A Scientific Guide to Alien Life, Antimatter, and Human Space Travel",
		author: "by Michael Wall and Karl Tate | 13 November 2018",
	},
	{
		id: 2,
		img: "https://m.media-amazon.com/images/I/81QDeZ1h0pL._AC_UY327_FMwebp_QL65_.jpg",
		title: "Space - Constellations: Knowledge Encyclopedia For Children",
		author: "by Wonder House Books  | 1 January 2020",
	},
	{
		id: 3,
		img: "https://m.media-amazon.com/images/I/51sX5WhsXLL._AC_UY327_FMwebp_QL65_.jpg",
		title: "Space - 500 Facts",
		author: "by Pegasus  | 18 May 2018",
	},
];

// This component called stateless functional component or dumped component.
// Always return JXS
function BookList() {
	return (
		<section className="booklist">
			{allBooks.map((book) => {
				// return <Book img={book.img} title={book.title} author={book.author} />;
				// return <Book key={book.id} book={book} />;
				// we can pass it using also spread opeartor
				return <Book key={book.id} {...book} />;
			})}
		</section>
	);
}

const Book = ({ img, title, author }) => {
	// console.log(props);
	// const { img, title, author } = props;
	// eventHander => onClick and onMouseOver
	const clickHanlder = () => {
		alert("Hello Dz!");
	};
	// const complexClick = () => {
	// 	// alert(author);
	// 	console.log(author);
	// };
	const complexClick = (author) => {
		// alert(author);
		console.log(author);
	};

	return (
		<article className="book">
			<img src={img} alt="" />
			<h3>{title}</h3>
			<h4>{author}</h4>
			<button type="button" onClick={clickHanlder}>
				reference
			</button>
			{/* <button type="button" onClick={complexClick}>
				author
			</button> */}
			{/* This method used when you must have to passing a argument to the events. */}
			<button
				type="button"
				onClick={() => {
					complexClick(author);
				}}
			>
				author
			</button>
			{/* {props.children} */}
		</article>
	);
};

// const Image = () => {
// 	return ;
// };

// const Title = () => {
// 	return ;
// };

// const Author = () => {
// 	return ;
// };
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
