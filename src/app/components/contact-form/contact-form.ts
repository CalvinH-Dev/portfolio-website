import { HttpClient } from "@angular/common/http";
import {
	afterNextRender,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	inject,
	viewChild,
} from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { AnimateOnScroll } from "app/directives/animation-on-scroll";
import { ScrollOnFocusDirective } from "app/directives/scroll-on-focus";
import { ContactInformation } from "app/interfaces/contact-information";
import { LottieCheckbox } from "app/lotties/lottie-checkbox/lottie-checkbox";
import { LanguageService } from "app/services/language";
import { Tokens } from "app/services/tokens";
import { FormGroup } from "../form-group/form-group";

@Component({
	selector: "app-contact-form",
	imports: [
		FormsModule,
		RouterLink,
		FormGroup,
		AnimateOnScroll,
		LottieCheckbox,
		ScrollOnFocusDirective,
	],
	templateUrl: "./contact-form.html",
	styleUrl: "./contact-form.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
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
	language = this.languageService.language;

	/**
	 * Contact form data model.
	 */
	contactData: ContactInformation = {
		name: "",
		email: "",
		message: "",
		privacy: false,
		csrf: "",
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
				"Content-Type": "application/json",
			},
			responseType: "text" as const,
			withCredentials: true,
		},
	};

	/**
	 * Reference to the toast element used for displaying success messages.
	 *
	 * The toast element is animated via CSS and its visibility is controlled
	 * by updating its `animationPlayState` property. It becomes visible when
	 * the animation is set to `"running"` and hides automatically after the
	 * animation completes.
	 *
	 * @example
	 * this.toast()!.nativeElement.style.animationPlayState = "running";
	 */
	toast = viewChild<ElementRef>("toast");

	private tokenService = inject(Tokens);

	constructor() {
		afterNextRender(async () => {
			this.contactData.csrf = await this.tokenService.getCsrfToken();
		});
	}

	/**
	 * Handles form submission.
	 * @param form The NgForm instance of the contact form.
	 */
	onSubmit(form: NgForm) {
		if (form.submitted && form.form.valid) {
			this.http
				.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
				.subscribe({
					next: () => {
						form.resetForm({
							name: "",
							email: "",
							message: "",
							privacy: false,
							csrf: this.contactData.csrf,
						});
						this.toast()!.nativeElement.style.animationPlayState = "running";
						console.log(this.contactData);
					},
					error: (error) => {
						console.error(error);
					},
				});
		}
	}
}
