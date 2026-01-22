import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { LanguageService } from "app/services/language";
import { Copyright } from "../svg/copyright/copyright";

@Component({
	selector: "app-footer",
	imports: [RouterLink, Copyright],
	templateUrl: "./footer.html",
	styleUrl: "./footer.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
	languageService = inject(LanguageService);
	language = this.languageService.language;

	getCurrentYear() {
		return new Date().getFullYear();
	}
}
