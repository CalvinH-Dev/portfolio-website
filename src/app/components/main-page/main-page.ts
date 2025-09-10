import { Component } from "@angular/core";
import { WhyMe } from "app/components/sections/why-me/why-me";
import { BackToTop } from "../back-to-top/back-to-top";
import { Colleagues } from "../sections/colleagues/colleagues";
import { ContactForm } from "../sections/contact-form/contact-form";
import { HeroSection } from "../sections/hero-section/hero-section";
import { MyWork } from "../sections/my-work/my-work";
import { SkillsSection } from "../sections/skills-section/skills-section";

@Component({
	selector: "app-main-page",
	imports: [HeroSection, WhyMe, SkillsSection, ContactForm, BackToTop, MyWork, Colleagues],
	templateUrl: "./main-page.html",
	styleUrl: "./main-page.scss",
})
export class MainPage {}
