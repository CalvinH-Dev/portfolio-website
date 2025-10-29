import { Routes } from "@angular/router";
import { Home } from "./components/pages/home/home";
import { Legal } from "./components/pages/legal/legal";
import { Privacy } from "./components/pages/privacy/privacy";

export const routes: Routes = [
	{ path: "", component: Home },
	{ path: "privacy", component: Privacy },
	{ path: "legal", component: Legal },
];
