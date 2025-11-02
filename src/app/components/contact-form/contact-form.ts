import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, inject, viewChild } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { ContactInformation } from "app/interfaces/contact-information";
import { LanguageService } from "app/services/language";
import { FormGroup } from "../form-group/form-group";

@Component({
	selector: "app-contact-form",
	imports: [FormsModule, RouterLink, FormGroup],
	templateUrl: "./contact-form.html",
	styleUrl: "./contact-form.scss",
})
export class ContactForm {
	/**
	 * Placeholders and error messages for form fields in multiple languages.
	 */
	placeholders = {
		name: {
			EN: { valid: "Your name", error: "Your name is required" },
			DE: { valid: "Ihr Name", error: "Ihr Name ist erforderlich" },
		},
		email: {
			required: {
				EN: { valid: "Your email", error: "Your email is required" },
				DE: { valid: "Ihre Email-Adresse", error: "Ihre Email-Adresse ist erforderlich" },
			},
			pattern: {
				EN: {
					error: "Please enter a valid email address (e.g. example.email@domain.com)",
				},
				DE: {
					error: "Bitte geben Sie eine gültige Email-Adresse ein (z. B. example.email@domain.com)",
				},
			},
		},
		message: {
			EN: { valid: "Your message", error: "Your message is required" },
			DE: { valid: "Ihre Nachricht an mich", error: "Ihre Nachricht ist erforderlich" },
		},
	};

	/**
	 * HttpClient instance for sending HTTP requests.
	 */
	http = inject(HttpClient);

	/**
	 * Language service instance for retrieving the current language.
	 */
	languageService = inject(LanguageService);

	/**
	 * The current language signal.
	 */
	language = this.languageService.getLanguage();

	/**
	 * Contact form data model.
	 */
	contactData: ContactInformation = {
		name: "",
		email: "",
		message: "",
		privacy: false,
	};

	/**
	 * Post configuration for sending form data.
	 */
	post = {
		endPoint: "https://hanisch-dev.de/sendMail.php",
		/**
		 * Serializes the contact data payload to a JSON string.
		 * @param payload The contact data to send.
		 * @returns JSON string of the payload.
		 */
		body: (payload: ContactInformation) => JSON.stringify(payload),
		options: {
			headers: {
				"Content-Type": "text/plain",
			},
			responseType: "text",
		},
	};

	toast = viewChild<ElementRef>("toast");

	/**
	 * Handles form submission.
	 * @param form The NgForm instance of the contact form.
	 */
	onSubmit(form: NgForm) {
		if (form.submitted && form.form.valid) {
			this.http.post(this.post.endPoint, this.post.body(this.contactData)).subscribe({
				next: () => {
					form.resetForm();
					this.toast()!.nativeElement.style.animationPlayState = "running";
				},
				error: (error) => {
					console.error(error);
				},
			});
		}
	}
}
