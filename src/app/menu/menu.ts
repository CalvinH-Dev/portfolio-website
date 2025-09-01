import { Component, model } from "@angular/core";

@Component({
	selector: "app-menu",
	imports: [],
	templateUrl: "./menu.html",
	styleUrl: "./menu.scss",
})
export class Menu {
	menuOpen = model<boolean>(false);
}
