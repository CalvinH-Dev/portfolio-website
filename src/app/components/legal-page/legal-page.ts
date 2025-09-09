import { Component, inject } from "@angular/core";
import { LanguageService } from "app/services/language";
import { BackToTop } from "../back-to-top/back-to-top";
import { EndSection } from "../end-section/end-section";
import { LinkArrow } from "../link-arrow/link-arrow";

@Component({
	selector: "app-legal-page",
	imports: [EndSection, LinkArrow, BackToTop],
	templateUrl: "./legal-page.html",
	styleUrl: "./legal-page.scss",
})
export class LegalPage {
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();
}
