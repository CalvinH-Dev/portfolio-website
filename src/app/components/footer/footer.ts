import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { LanguageService } from "app/services/language";

@Component({
	selector: "app-footer",
	imports: [RouterLink],
	templateUrl: "./footer.html",
	styleUrl: "./footer.scss",
})
export class Footer {
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();
}
