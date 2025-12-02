import { ViewportScroller } from "@angular/common";
import { Component, inject, model } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Language } from "app/interfaces/languages";
import { LanguageService } from "app/services/language";
import { Contact } from "../svg/contact/contact";
import { Hero } from "../svg/hero/hero";
import { Projects } from "../svg/projects/projects";
import { References } from "../svg/references/references";
import { RoundText } from "../svg/round-text/round-text";
import { Skills } from "../svg/skills/skills";
import { WhyMe } from "../svg/why-me/why-me";

@Component({
	selector: "app-menu",
	imports: [RouterLink, Projects, Contact, WhyMe, Hero, Skills, References, RoundText],
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

	toggleMenu() {
		this.menuOpen.update((value) => !value);
	}

	onProjectRefClicked(event: MouseEvent, id: string) {
		event.preventDefault();
		event.stopPropagation();

		this.closeMenu();

		const scrollContainer = document.querySelector("main") as HTMLElement;
		if (!scrollContainer) return;

		if (id === "#" || id === "root") {
			scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
			return;
		}

		const target = document.getElementById(id);
		if (target && scrollContainer.contains(target)) {
			const targetPosition = target.offsetLeft;
			scrollContainer.scrollTo({
				left: targetPosition,
				behavior: "smooth",
			});
		}
	}
}
