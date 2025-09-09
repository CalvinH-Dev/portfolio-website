import { Routes } from "@angular/router";
import { LegalPage } from "./components/legal-page/legal-page";
import { MainPage } from "./components/main-page/main-page";

export const routes: Routes = [
	{ path: "", component: MainPage },
	{ path: "legal", component: LegalPage },
];
