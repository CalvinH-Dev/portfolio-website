import { Component } from "@angular/core";
import { WhyMe } from "app/components/sections/why-me/why-me";
import { LinkArrow } from "../link-arrow/link-arrow";
import { Contact } from "../sections/contact/contact";
import { Hero } from "../sections/hero/hero";
import { Projects } from "../sections/projects/projects";
import { References } from "../sections/references/references";
import { SkillsSection } from "../sections/skills-section/skills-section";

@Component({
	selector: "app-main-page",
	imports: [WhyMe, SkillsSection, LinkArrow, Contact, References, Hero, Projects],
	templateUrl: "./main-page.html",
	styleUrl: "./main-page.scss",
})
export class MainPage {}
