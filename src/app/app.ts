import { isPlatformBrowser } from "@angular/common";
import { AfterViewInit, Component, inject, PLATFORM_ID, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Menu } from "./components/menu/menu";
import { Socials } from "./components/sections/socials/socials";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, Header, Menu, Footer, Socials],
	templateUrl: "./app.html",
	styleUrl: "./app.scss",
})
export class App implements AfterViewInit {
	protected readonly title = signal("portfolio");
	menuOpen = false;
	platformId = inject(PLATFORM_ID);

	ngAfterViewInit() {
		if (isPlatformBrowser(this.platformId)) {
			window.addEventListener("wheel", this.onWheelDesktop, { passive: false });
		}
	}

	onWheelDesktop(event: WheelEvent) {
		window.scrollBy({
			left: event.deltaY * 5,
			top: 0,
		});
		return false;
	}
}
