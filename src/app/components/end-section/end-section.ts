import { Component, inject, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { LanguageService } from "app/services/language";
import { LinkArrow } from "../link-arrow/link-arrow";
import { Mail } from "../svg/mail/mail";
import { Phone } from "../svg/phone/phone";

@Component({
	selector: "app-end-section",
	imports: [Phone, Mail, LinkArrow, RouterLink],
	templateUrl: "./end-section.html",
	styleUrl: "./end-section.scss",
})
export class EndSection {
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();

	href = input<string>("#");

	showText = input<boolean>(true);
}
