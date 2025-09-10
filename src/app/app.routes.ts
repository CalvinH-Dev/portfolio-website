import { Routes } from "@angular/router";
import { MainPage } from "./components/main-page/main-page";
import { Privacy } from "./components/privacy/privacy";

export const routes: Routes = [
	{ path: "", component: MainPage },
	{ path: "privacy", component: Privacy },
];
