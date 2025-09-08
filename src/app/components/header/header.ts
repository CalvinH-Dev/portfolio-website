import { Component, inject, model } from "@angular/core";
import { MenuButton } from "app/components/menu-button/menu-button";
import { LanguageService } from "app/services/language";

@Component({
	selector: "app-header",
	imports: [MenuButton],
	templateUrl: "./header.html",
	styleUrl: "./header.scss",
})
export class Header {
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();
	menuOpen = model<boolean>();
}
