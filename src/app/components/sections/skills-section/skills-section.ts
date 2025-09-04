import { Component } from "@angular/core";
import { LinkArrow } from "app/components/link-arrow/link-arrow";
import { Image } from "app/interfaces/image";

const imageList: Image[] = [
	{ src: "img/skills/angular.png", alt: "" },
	{ src: "img/skills/api.png", alt: "" },
	{ src: "img/skills/css.png", alt: "" },
	{ src: "img/skills/git.png", alt: "" },
	{ src: "img/skills/html.png", alt: "" },
	{ src: "img/skills/javascript.png", alt: "" },
	{ src: "img/skills/typescript.png", alt: "" },
	{ src: "img/skills/question-mark.png", alt: "" },
];

@Component({
	selector: "app-skills-section",
	imports: [LinkArrow],
	templateUrl: "./skills-section.html",
	styleUrl: "./skills-section.scss",
})
export class SkillsSection {
	images: Image[] = imageList;
}
