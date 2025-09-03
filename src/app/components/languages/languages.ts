import { Component, inject } from "@angular/core";
import { Language } from "app/interfaces/languages";
import { LanguageService } from "app/services/language";

@Component({
	selector: "app-languages",
	imports: [],
	templateUrl: "./languages.html",
	styleUrl: "./languages.scss",
})
export class Languages {
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();

	onLanguageChange(language: Language) {
		this.languageService.setLanguage(language);
	}
}
