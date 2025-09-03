import { Component, model } from "@angular/core";
import { MenuButton } from "app/menu-button/menu-button";

@Component({
	selector: "app-header",
	imports: [MenuButton],
	templateUrl: "./header.html",
	styleUrl: "./header.scss",
})
export class Header {
	menuOpen = model<boolean>();
}
