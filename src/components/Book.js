import React from "react";

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

export default Book;
