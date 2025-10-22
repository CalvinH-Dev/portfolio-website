import { Component } from "@angular/core";
import { WhyMe } from "app/components/sections/why-me/why-me";
import { LinkArrow } from "../link-arrow/link-arrow";
import { Colleagues } from "../sections/colleagues/colleagues";
import { Contact } from "../sections/contact/contact";
import { HeroSection } from "../sections/hero-section/hero-section";
import { MyWork } from "../sections/my-work/my-work";
import { SkillsSection } from "../sections/skills-section/skills-section";

@Component({
	selector: "app-main-page",
	imports: [HeroSection, WhyMe, SkillsSection, MyWork, Colleagues, LinkArrow, Contact],
	templateUrl: "./main-page.html",
	styleUrl: "./main-page.scss",
})
export class MainPage {}
