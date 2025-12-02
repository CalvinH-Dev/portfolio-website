import { Component, inject } from "@angular/core";
import { ContactForm } from "app/components/contact-form/contact-form";
import { End } from "app/components/sections/end/end";
import { AnimateOnScroll } from "app/directives/animation-on-scroll";
import { LanguageService } from "app/services/language";

@Component({
	selector: "app-contact",
	imports: [ContactForm, End, AnimateOnScroll],
	templateUrl: "./contact.html",
	styleUrl: "./contact.scss",
})
export class Contact {
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();
}
