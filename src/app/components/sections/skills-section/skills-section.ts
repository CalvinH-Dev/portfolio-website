import { Component, inject } from "@angular/core";
import { LinkArrow } from "app/components/link-arrow/link-arrow";
import { Image } from "app/interfaces/image";
import { LanguageService } from "app/services/language";

const imageList: Image[] = [
	{ src: "img/skills/angular.webp", alt: "" },
	{ src: "img/skills/api.webp", alt: "" },
	{ src: "img/skills/css.webp", alt: "" },
	{ src: "img/skills/git.webp", alt: "" },
	{ src: "img/skills/html.webp", alt: "" },
	{ src: "img/skills/javascript.webp", alt: "" },
	{ src: "img/skills/typescript.webp", alt: "" },
	{ src: "img/skills/question-mark.webp", alt: "" },
];

@Component({
	selector: "app-skills-section",
	imports: [LinkArrow],
	templateUrl: "./skills-section.html",
	styleUrl: "./skills-section.scss",
})
export class SkillsSection {
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();
	images: Image[] = imageList;
}
