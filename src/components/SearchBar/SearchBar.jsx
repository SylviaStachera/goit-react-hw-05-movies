import { useState } from "react";

import css from "./SearchBar.module.css";

const SearchBar = ({ onInputValue }) => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleChange = (evt) => {
		const newSearchQuery = evt.currentTarget.value.toLowerCase();
		setSearchQuery(newSearchQuery);
		onInputValue(newSearchQuery);
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		setSearchQuery("");
	};

	return (
		<form className={css.form} onSubmit={handleSubmit}>
			<input
				className={css.input}
				type="text"
				autoComplete="off"
				autoFocus
				placeholder="Search movies..."
				value={searchQuery}
				onChange={handleChange}
			/>
			<button type="submit">Search</button>
		</form>
	);
};

export default SearchBar;
