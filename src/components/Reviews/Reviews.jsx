import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieReviews } from "../services/api";

const Reviews = () => {
	const [reviews, setReviews] = useState([]);
	const { movieId } = useParams();

	useEffect(() => {
		getMovieReviews(movieId)
			.then((data) => {
				setReviews(data.results);
			})
			.catch((error) => console.log(error));
	}, [movieId]);

	return (
		<section>
			<ul>
				{reviews.length > 0 ? (
					reviews.map(({ id, author, content }) => {
						return (
							<li key={id}>
								<h4>Author: {author}</h4>
								<p>{content}</p>
							</li>
						);
					})
				) : (
					<p>We don't have any reviews for this movie.</p>
				)}
			</ul>
		</section>
	);
};
export default Reviews;
