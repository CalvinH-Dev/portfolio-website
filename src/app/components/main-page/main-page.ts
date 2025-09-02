import { Component } from "@angular/core";
import { WhyMe } from "app/components/sections/why-me/why-me";
import { Contact } from "../sections/contact/contact";
import { HeroSection } from "../sections/hero-section/hero-section";
import { SkillsSection } from "../skills-section/skills-section";

@Component({
	selector: "app-main-page",
	imports: [HeroSection, WhyMe, Contact, SkillsSection],
	templateUrl: "./main-page.html",
	styleUrl: "./main-page.scss",
})
export class MainPage {}
