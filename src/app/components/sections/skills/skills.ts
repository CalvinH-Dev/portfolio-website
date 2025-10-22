import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { LinkArrow } from "app/components/link-arrow/link-arrow";
import { Skill } from "app/interfaces/skill";
import { LanguageService } from "app/services/language";

const skillsList: Skill[] = [
	{ image: { src: "img/skills/angular.webp", alt: "Angular" }, title: "Angular" },
	{ image: { src: "img/skills/api.webp", alt: "API" }, title: "API" },
	{ image: { src: "img/skills/css.webp", alt: "CSS" }, title: "CSS" },
	{ image: { src: "img/skills/git.webp", alt: "Git" }, title: "GIT" },
	{ image: { src: "img/skills/html.webp", alt: "HTML" }, title: "HTML" },
	{ image: { src: "img/skills/javascript.webp", alt: "Javascript" }, title: "Javascript" },
	{ image: { src: "img/skills/typescript.webp", alt: "Typescript" }, title: "Typescript" },
	{ image: { src: "img/skills/question-mark.webp", alt: "Question Mark" }, title: "?" },
];

@Component({
	selector: "app-skills",
	imports: [LinkArrow, RouterLink],
	templateUrl: "./skills.html",
	styleUrl: "./skills.scss",
})
export class Skills {
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();
	skills: Skill[] = skillsList;
}
