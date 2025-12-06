import { Routes } from "@angular/router";

export const routes: Routes = [
	{ path: "", loadComponent: () => import("./components/pages/home/home").then((m) => m.Home) },
	{
		path: "privacy",
		loadComponent: () => import("./components/pages/privacy/privacy").then((m) => m.Privacy),
	},
	{
		path: "legal",
		loadComponent: () => import("./components/pages/legal/legal").then((m) => m.Legal),
	},
];
