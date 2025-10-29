import { ViewportScroller } from "@angular/common";
import { Component, inject, model } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Language } from "app/interfaces/languages";
import { LanguageService } from "app/services/language";
import { Languages } from "../languages/languages";

@Component({
	selector: "app-menu",
	imports: [Languages, RouterLink],
	templateUrl: "./menu.html",
	styleUrl: "./menu.scss",
})
export class Menu {
	/**
	 * Tracks whether the menu is open.
	 */
	menuOpen = model<boolean>();

	/**
	 * Language service instance for retrieving and updating the current language.
	 */
	languageService = inject(LanguageService);

	/**
	 * The current language signal.
	 */
	language = this.languageService.getLanguage();

	/**
	 * Viewport scroller instance for scrolling with offset.
	 * Offset is set to [0, 80] to account for header height.
	 */
	private viewportScroller = inject(ViewportScroller).setOffset([0, 80]);

	/**
	 * Closes the menu by setting `menuOpen` to false.
	 */
	closeMenu() {
		this.menuOpen.update(() => false);
	}

	/**
	 * Updates the application language.
	 * @param language The new language to set.
	 */
	onLanguageChange(language: Language) {
		this.languageService.setLanguage(language);
	}
}
