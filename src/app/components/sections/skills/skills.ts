import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { LinkArrow } from "app/components/link-arrow/link-arrow";
import { AnimateOnScroll } from "app/directives/animation-on-scroll";
import { Skill } from "app/interfaces/skill";
import { LanguageService } from "app/services/language";

const skillsList: Skill[] = [
	{
		image: { src: "img/skills/svgs/skill-icons--html.svg", alt: "HTML" },
		title: "html",
	},
	{
		image: { src: "img/skills/svgs/skill-icons--css.svg", alt: "CSS" },
		title: "CSS",
	},
	{
		image: { src: "img/skills/svgs/skill-icons--javascript.svg", alt: "Javascript" },
		title: "Javascript",
	},
	{
		image: { src: "img/skills/svgs/skill-icons--typescript.svg", alt: "Typescript" },
		title: "Typescript",
	},
	{
		image: { src: "img/skills/svgs/skill-icons--vite-dark.svg", alt: "Vite" },
		title: "Vite",
	},
	{
		image: { src: "img/skills/svgs/skill-icons--git.svg", alt: "Git" },
		title: "GIT",
	},
	{
		image: { src: "img/skills/svgs/skill-icons--angular-dark.svg", alt: "Angular" },
		title: "Angular",
	},
	{
		image: { src: "img/skills/svgs/skill-icons--firebase.svg", alt: "Firebase" },
		title: "Firebase",
	},
	{
		image: { src: "img/skills/svgs/skill-icons--python-dark.svg", alt: "Python" },
		title: "Python",
	},
	{
		image: { src: "img/skills/svgs/skill-icons--django.svg", alt: "Django" },
		title: "Django",
	},
	{
		image: { src: "img/skills/svgs/skill-icons--postman.svg", alt: "Postman" },
		title: "Postman",
	},
	{
		image: { src: "img/skills/svgs/skill-icons--sqlite.svg", alt: "Sqlite" },
		title: "SQLite",
	},
	{
		image: { src: "img/skills/svgs/skill-icons--mongodb.svg", alt: "Mongo DB" },
		title: "Mongo DB",
	},
	{
		image: { src: "img/skills/svgs/skill-icons--supabase-dark.svg", alt: "Supabase" },
		title: "Supabase",
	},
];

@Component({
	selector: "app-skills",
	imports: [LinkArrow, RouterLink, AnimateOnScroll],
	templateUrl: "./skills.html",
	styleUrl: "./skills.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
	languageService = inject(LanguageService);
	language = this.languageService.language;
	skills: Skill[] = skillsList;
}
