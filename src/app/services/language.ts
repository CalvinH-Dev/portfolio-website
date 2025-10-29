import { Injectable, signal } from "@angular/core";
import { Language } from "app/interfaces/languages";

@Injectable({
	providedIn: "root",
})
export class LanguageService {
	/**
	 * The current language as a reactive signal.
	 */
	language = signal<Language>("EN");

	/**
	 * Returns the current language signal.
	 * @returns The reactive language signal.
	 */
	getLanguage() {
		return this.language;
	}

	/**
	 * Updates the current language.
	 * @param language The new language to set.
	 */
	setLanguage(language: Language): void {
		this.language.update(() => language);
	}
}
