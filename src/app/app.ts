import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Menu } from "./components/menu/menu";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, Header, Menu, Footer],
	templateUrl: "./app.html",
	styleUrl: "./app.scss",
})
export class App {
	protected readonly title = signal("portfolio");
	menuOpen = false;
}
