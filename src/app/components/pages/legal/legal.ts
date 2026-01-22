import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { LinkArrow } from "app/components/link-arrow/link-arrow";
import { End } from "app/components/sections/end/end";
import { LanguageService } from "app/services/language";

@Component({
	selector: "app-legal",
	imports: [End, LinkArrow],
	templateUrl: "./legal.html",
	styleUrl: "./legal.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Legal {
	languageService = inject(LanguageService);
	language = this.languageService.language;
}
