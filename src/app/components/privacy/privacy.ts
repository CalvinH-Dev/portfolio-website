import { Component, inject } from "@angular/core";
import { LanguageService } from "app/services/language";
import { BackToTop } from "../back-to-top/back-to-top";
import { EndSection } from "../end-section/end-section";
import { LinkArrow } from "../link-arrow/link-arrow";

@Component({
	selector: "app-privacy",
	imports: [EndSection, LinkArrow, BackToTop],
	templateUrl: "./privacy.html",
	styleUrl: "./privacy.scss",
})
export class Privacy {
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();
}
