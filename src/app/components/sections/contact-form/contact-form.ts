import { Component, inject } from "@angular/core";
import { ContactInputs } from "app/components/contact-inputs/contact-inputs";
import { EndSection } from "app/components/end-section/end-section";
import { LanguageService } from "app/services/language";

@Component({
	selector: "app-contact-form",
	imports: [ContactInputs, EndSection],
	templateUrl: "./contact-form.html",
	styleUrl: "./contact-form.scss",
})
export class ContactForm {
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();
}
