import React from "react";
const Pokedeck = React.lazy(() => import("./components/Pokedeck"));
const Welcome = React.lazy(() => import("./components/Welcome"));
// const MovieResults = React.lazy(() => import("./components/MovieResults"));
// const Movie = React.lazy(() => import("./components/Movie"));

const routes = [
	{
		path: "/",
		exact: true,
		name: "Welcome",
		component: Welcome,
	},
	{
		path: "/pokedeck",
		exact: true,
		name: "Pokedeck",
		component: Pokedeck,
	},

	// {
	// 	path: "/movies",
	// 	exact: true,
	// 	name: "Movies",
	// 	component: MovieResults,
	// },
	// {
	// 	path: "/movies/:imdbID",
	// 	exact: true,
	// 	name: "Movie Details",
	// 	component: Movie,
	// },
    { path: "*", exact: true, name: "Page Not Found", component: Pokedeck },
];

export default routes;