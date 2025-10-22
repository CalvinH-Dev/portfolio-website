import { Component } from "@angular/core";
import { WhyMe } from "app/components/sections/why-me/why-me";
import { LinkArrow } from "../link-arrow/link-arrow";
import { Contact } from "../sections/contact/contact";
import { HeroSection } from "../sections/hero-section/hero-section";
import { MyWork } from "../sections/my-work/my-work";
import { References } from "../sections/references/references";
import { SkillsSection } from "../sections/skills-section/skills-section";

@Component({
	selector: "app-main-page",
	imports: [HeroSection, WhyMe, SkillsSection, MyWork, LinkArrow, Contact, References],
	templateUrl: "./main-page.html",
	styleUrl: "./main-page.scss",
})
export class MainPage {}
