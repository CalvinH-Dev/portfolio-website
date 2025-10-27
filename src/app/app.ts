import { afterNextRender, Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Footer } from "./components/footer/footer";
import { HeaderDesktop } from "./components/header-desktop/header-desktop";
import { Header } from "./components/header/header";
import { Menu } from "./components/menu/menu";
import { Socials } from "./components/sections/socials/socials";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, Header, Menu, Footer, Socials, HeaderDesktop],
	templateUrl: "./app.html",
	styleUrl: "./app.scss",
})
export class App {
	protected readonly title = signal("portfolio");
	menuOpen = false;

	constructor() {
		afterNextRender(() => {
			function onWheelDesktop(event: WheelEvent) {
				window.scrollBy({
					left: event.deltaY * 5,
					top: 0,
				});
				return false;
			}
			window.addEventListener("wheel", onWheelDesktop, { passive: false });
		});
	}
}
