import { afterNextRender, ChangeDetectionStrategy, Component, inject, signal } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { Footer } from "./components/footer/footer";
import { Menu } from "./components/menu/menu";
import { Socials } from "./components/sections/socials/socials";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, Menu, Footer, Socials],
	templateUrl: "./app.html",
	styleUrl: "./app.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
	/**
	 * The application title as a reactive signal.
	 */
	protected readonly title = signal("portfolio");

	/**
	 * Indicates whether the menu is open.
	 */
	menuOpen = false;

	/**
	 * Router instance for navigation and event subscriptions.
	 */
	router = inject(Router);

	constructor() {
		afterNextRender(() => {
			const container = document.querySelector("main")!;

			/**
			 * Scrolls the main container horizontally on mouse wheel events.
			 * @param event The wheel event.
			 * @returns false to prevent default behavior.
			 */
			function onWheelDesktop(event: WheelEvent) {
				container.scrollBy({
					left: event.deltaY * 5,
					top: 0,
				});
				return false;
			}

			window.addEventListener("wheel", onWheelDesktop, { passive: false });

			/**
			 * Scrolls the container back to the left when the router triggers a navigation event.
			 * @param event The router event.
			 */
			this.router.events.subscribe((event) => {
				if (event.type === 1 && !event.url.includes("#")) {
					container.scrollTo({ left: 0, behavior: "smooth" });
				}
			});
		});
	}
}
