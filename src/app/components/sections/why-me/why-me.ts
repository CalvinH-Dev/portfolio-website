import { Component, inject } from "@angular/core";
import { LinkArrow } from "app/components/link-arrow/link-arrow";
import { Location } from "app/components/svg/location/location";
import { Relocate } from "app/components/svg/relocate/relocate";
import { Remote } from "app/components/svg/remote/remote";
import { LanguageService } from "app/services/language";

@Component({
	selector: "app-why-me",
	imports: [LinkArrow, Remote, Relocate, Location],
	templateUrl: "./why-me.html",
	styleUrl: "./why-me.scss",
})
export class WhyMe {
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();
}
