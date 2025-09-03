import { Injectable, signal } from "@angular/core";
import { Language } from "app/interfaces/languages";

@Injectable({
	providedIn: "root",
})
export class LanguageService {
	language = signal<Language>("EN");

	getLanguage() {
		return this.language;
	}

	setLanguage(language: Language): void {
		this.language.update(() => language);
	}
}
