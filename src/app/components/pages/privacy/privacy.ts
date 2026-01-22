import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { LanguageService } from "app/services/language";
import { LinkArrow } from "../../link-arrow/link-arrow";
import { End } from "../../sections/end/end";

@Component({
	selector: "app-privacy",
	imports: [LinkArrow, End],
	templateUrl: "./privacy.html",
	styleUrl: "./privacy.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Privacy {
	languageService = inject(LanguageService);
	language = this.languageService.language;

	alignArrow: "center" | "start" | "end" = "center";
}
