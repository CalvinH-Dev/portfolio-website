import { inject, Injectable, signal } from "@angular/core";
import { Language } from "app/interfaces/languages";
import { Storage } from "./storage"; // Pfad anpassen

@Injectable({
	providedIn: "root",
})
export class LanguageService {
	private readonly STORAGE_KEY = "user-language";

	/**
	 * The current language as a reactive signal.
	 */
	language = signal<Language>("EN");
	private storage = inject(Storage);

	/**
	 * Returns the current language from storage.
	 * @returns The stored language or default "EN".
	 */
	getLanguage(): Language {
		const stored = this.storage.getItem(this.STORAGE_KEY);
		return (stored as Language) || "EN";
	}

	/**
	 * Updates the current language.
	 * @param language The new language to set.
	 */
	setLanguage(language: Language): void {
		this.storage.setItem(this.STORAGE_KEY, language);
		this.language.set(language);
	}

	/**
	 * Initializes the language from storage on app start.
	 */
	initLanguage(): void {
		const savedLang = this.getLanguage();
		this.language.set(savedLang);
	}
}
