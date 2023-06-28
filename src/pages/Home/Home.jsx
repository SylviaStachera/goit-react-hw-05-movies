import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getTrending } from "../../components/services/api";

import css from "./Home.module.css";

const Home = () => {
	const [trendingMovies, setTrendingMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setIsLoading(true);

		getTrending()
			.then((data) => {
				setTrendingMovies(data.results);
				setIsLoading(false);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className={css["list-container"]}>
			<h1>Trending today</h1>
			<ul>
				{trendingMovies.map((movie) => {
					return (
						<li key={movie.id}>
							<Link to={`/movies/${movie.id}`} state={{ from: location }}>
								{" "}
								{movie.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Home;
