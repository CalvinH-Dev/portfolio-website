import { Component, inject } from "@angular/core";
import { ContactForm } from "app/components/contact-form/contact-form";
import { EndSection } from "app/components/end-section/end-section";
import { LanguageService } from "app/services/language";

@Component({
	selector: "app-contact",
	imports: [EndSection, ContactForm],
	templateUrl: "./contact.html",
	styleUrl: "./contact.scss",
})
export class Contact {
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();
}
