import { Component, inject, input } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { LanguageService } from "app/services/language";
import { LinkArrow } from "../../link-arrow/link-arrow";
import { Mail } from "../../svg/mail/mail";
import { Phone } from "../../svg/phone/phone";

@Component({
	selector: "app-end",
	imports: [Phone, Mail, LinkArrow, RouterLink],
	templateUrl: "./end.html",
	styleUrl: "./end.scss",
})
export class End {
	/**
	 * Language service instance for retrieving the current language.
	 */
	languageService = inject(LanguageService);

	/**
	 * The current language signal.
	 */
	language = this.languageService.getLanguage();

	/**
	 * Router instance for navigation and URL inspection.
	 */
	router = inject(Router);

	/**
	 * Input href attribute for the link. Defaults to "#".
	 */
	href = input<string>("#");

	/**
	 * Determines whether the text is displayed. Defaults to true.
	 */
	showText = input<boolean>(true);

	/**
	 * Handles click events on the link.
	 * If the target path matches the current path, it scrolls smoothly to the start of the main container.
	 * @param event The mouse event triggered by clicking the link.
	 */
	onClick(event: MouseEvent) {
		const target = event.target as HTMLElement;
		const container = document.querySelector("main")!;

		const link = (target as HTMLAnchorElement).getAttribute("href");

		if (!link) return;

		const currentPath = this.router.url.split(/[?#]/)[0];
		const targetPath = link.split(/[?#]/)[0];

		if (targetPath === currentPath) {
			event.preventDefault();
			container.scrollTo({ left: 0, behavior: "smooth" });
		}
	}
}
