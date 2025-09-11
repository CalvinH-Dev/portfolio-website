import { HttpClient } from "@angular/common/http";
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
	placeholders = {
		name: {
			EN: { valid: "Your name", error: "Your name is required" },
			DE: { valid: "Ihr Name", error: "Ihr Name ist erforderlich" },
		},
		email: {
			EN: { valid: "Your email", error: "Your email is required" },
			DE: { valid: "Ihre Email-Adresse", error: "Ihre Email-Adresse ist erforderlich" },
		},
		message: {
			EN: { valid: "Your message", error: "Your message is required" },
			DE: { valid: "Ihre Nachricht an mich", error: "Ihre Nachricht ist erforderlich" },
		},
	};

	http = inject(HttpClient);
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();

	contactData: ContactInformation = {
		name: "",
		email: "",
		message: "",
		privacy: false,
	};

	post = {
		endPoint: "https://portfolio.hanisch-dev.de/sendMail.php",
		body: (payload: any) => JSON.stringify(payload),
		options: {
			headers: {
				"Content-Type": "text/plain",
			},
			responseType: "text",
		},
	};

	onSubmit(form: NgForm) {
		if (form.submitted && form.form.valid) {
			this.http.post(this.post.endPoint, this.post.body(this.contactData)).subscribe({
				next: () => {
					form.resetForm();
				},
				error: (error) => {
					console.error(error);
				},
				complete: () => {
					console.info("send post complete");
				},
			});
		}
	}
}
