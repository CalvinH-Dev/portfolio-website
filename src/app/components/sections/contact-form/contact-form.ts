import { Component } from "@angular/core";
import { ContactInputs } from "app/components/contact-inputs/contact-inputs";
import { Mail } from "app/components/svg/mail/mail";
import { Phone } from "app/components/svg/phone/phone";

@Component({
	selector: "app-contact-form",
	imports: [ContactInputs, Phone, Mail],
	templateUrl: "./contact-form.html",
	styleUrl: "./contact-form.scss",
})
export class ContactForm {
	phoneHovered = false;
	mailHovered = false;

	onPhoneEnter() {
		this.phoneHovered = true;
	}

	onMailEnter() {
		this.mailHovered = true;
	}

	onPhoneLeave() {
		this.phoneHovered = false;
	}

	onMailLeave() {
		this.mailHovered = false;
	}
}
