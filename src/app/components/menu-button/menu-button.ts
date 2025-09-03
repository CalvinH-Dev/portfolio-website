import { Component, model } from "@angular/core";

@Component({
	selector: "app-menu-button",
	imports: [],
	templateUrl: "./menu-button.html",
	styleUrl: "./menu-button.scss",
})
export class MenuButton {
	menuOpen = model<boolean>();

	onClick() {
		this.menuOpen.update((value) => !value);
	}
}
