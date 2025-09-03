import { Component, inject, model } from "@angular/core";
import { Language } from "app/interfaces/languages";
import { LanguageService } from "app/services/language";
import { Languages } from "../languages/languages";

@Component({
	selector: "app-menu",
	imports: [Languages],
	templateUrl: "./menu.html",
	styleUrl: "./menu.scss",
})
export class Menu {
	menuOpen = model<boolean>();
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();

	closeMenu() {
		this.menuOpen.update(() => false);
	}

	onLanguageChange(language: Language) {
		this.languageService.setLanguage(language);
	}
}
