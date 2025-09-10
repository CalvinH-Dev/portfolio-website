import { Component, inject } from "@angular/core";
import { LanguageService } from "app/services/language";

@Component({
	selector: "app-footer",
	imports: [],
	templateUrl: "./footer.html",
	styleUrl: "./footer.scss",
})
export class Footer {
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();
}
