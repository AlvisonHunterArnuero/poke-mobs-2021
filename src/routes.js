import React from "react";
const Pokedeck = React.lazy(() => import("./components/Pokedeck"));
const Welcome = React.lazy(() => import("./components/Welcome"));

const routes = [
	{
		path: "/",
		name: "Welcome",
		component: Welcome,
	},
	{
		path: "/pokedeck",
		exact: true,
		name: "Pokedeck",
		component: Pokedeck,
	},
    { path: "*", exact: true, name: "Page Not Found", component: Welcome },
];

export default routes;