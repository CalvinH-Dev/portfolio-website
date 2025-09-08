import { Component, inject } from "@angular/core";
import { ContactInputs } from "app/components/contact-inputs/contact-inputs";
import { LinkArrow } from "app/components/link-arrow/link-arrow";
import { Mail } from "app/components/svg/mail/mail";
import { Phone } from "app/components/svg/phone/phone";
import { LanguageService } from "app/services/language";

@Component({
	selector: "app-contact-form",
	imports: [ContactInputs, Phone, Mail, LinkArrow],
	templateUrl: "./contact-form.html",
	styleUrl: "./contact-form.scss",
})
export class ContactForm {
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();
}
