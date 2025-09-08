import { Component, inject } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { ContactInformation } from "app/interfaces/contact-information";
import { LanguageService } from "app/services/language";

@Component({
	selector: "app-contact-inputs",
	imports: [FormsModule],
	templateUrl: "./contact-inputs.html",
	styleUrl: "./contact-inputs.scss",
})
export class ContactInputs {
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();

	contactData: ContactInformation = {
		name: "",
		email: "",
		message: "",
	};

	onSubmit(form: NgForm) {
		console.log(form.value);
	}
}
