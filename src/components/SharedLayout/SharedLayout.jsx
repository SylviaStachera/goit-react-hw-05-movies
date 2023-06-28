import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";

import css from "./SharedLayout.module.css";

export const SharedLayout = () => {
	return (
		<div className={css.container}>
			<header className={css.header}>
				<nav>
					<Link className={css["nav--item"]} to="/">
						Home
					</Link>
					<Link className={css["nav--item"]} to="/movies">
						Movies
					</Link>
				</nav>
			</header>

			<Suspense fallback={<div>Loading page...</div>}>
				<Outlet />
			</Suspense>
		</div>
	);
};
