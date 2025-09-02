import { Component } from "@angular/core";
import { ContactInputs } from "app/components/contact-inputs/contact-inputs";

@Component({
	selector: "app-contact-form",
	imports: [ContactInputs],
	templateUrl: "./contact-form.html",
	styleUrl: "./contact-form.scss",
})
export class ContactForm {}
