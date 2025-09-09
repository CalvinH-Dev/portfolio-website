import { Component, inject, input } from "@angular/core";
import { LanguageService } from "app/services/language";
import { LinkArrow } from "../link-arrow/link-arrow";
import { Mail } from "../svg/mail/mail";
import { Phone } from "../svg/phone/phone";

@Component({
	selector: "app-end-section",
	imports: [Phone, Mail, LinkArrow],
	templateUrl: "./end-section.html",
	styleUrl: "./end-section.scss",
})
export class EndSection {
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();

	showText = input<boolean>(true);
}
