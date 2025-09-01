import { Component } from "@angular/core";
import { MenuButton } from "app/menu-button/menu-button";
import { Menu } from "app/menu/menu";

@Component({
	selector: "app-nav",
	imports: [MenuButton, Menu],
	templateUrl: "./nav.html",
	styleUrl: "./nav.scss",
})
export class Nav {
	menuOpen = false;
}
