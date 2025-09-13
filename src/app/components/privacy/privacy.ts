import { Component, inject } from "@angular/core";
import { LanguageService } from "app/services/language";
import { EndSection } from "../end-section/end-section";
import { LinkArrow } from "../link-arrow/link-arrow";

@Component({
	selector: "app-privacy",
	imports: [EndSection, LinkArrow],
	templateUrl: "./privacy.html",
	styleUrl: "./privacy.scss",
})
export class Privacy {
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();

	alignArrow: "center" | "start" | "end" = "center";
}
