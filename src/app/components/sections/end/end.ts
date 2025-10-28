import { Component, inject, input } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { LanguageService } from "app/services/language";
import { LinkArrow } from "../../link-arrow/link-arrow";
import { Mail } from "../../svg/mail/mail";
import { Phone } from "../../svg/phone/phone";

@Component({
	selector: "app-end",
	imports: [Phone, Mail, LinkArrow, RouterLink],
	templateUrl: "./end.html",
	styleUrl: "./end.scss",
})
export class End {
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();
	router = inject(Router);

	href = input<string>("#");

	showText = input<boolean>(true);

	onClick(event: MouseEvent) {
		const target = event.target as HTMLElement;
		const container = document.querySelector("main")!;

		const link = (target as HTMLAnchorElement).getAttribute("href");
		console.log(link);
		if (!link) return;

		const currentPath = this.router.url.split(/[?#]/)[0];
		const targetPath = link.split(/[?#]/)[0];

		console.log(currentPath);
		console.log(targetPath);

		if (targetPath === currentPath) {
			console.log("hier");
			console.log(container);
			event.preventDefault();
			container.scrollTo({ left: 0, behavior: "smooth" });
		}
	}
}
