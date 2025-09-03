import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Header } from "./header/header";
import { Menu } from "./menu/menu";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, Header, Menu],
	templateUrl: "./app.html",
	styleUrl: "./app.scss",
})
export class App {
	protected readonly title = signal("portfolio");
	menuOpen = false;
}
