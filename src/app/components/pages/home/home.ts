import { Component } from "@angular/core";
import { WhyMe } from "app/components/sections/why-me/why-me";
import { LinkArrow } from "../../link-arrow/link-arrow";
import { Contact } from "../../sections/contact/contact";
import { Hero } from "../../sections/hero/hero";
import { Projects } from "../../sections/projects/projects";
import { References } from "../../sections/references/references";
import { Skills } from "../../sections/skills/skills";

@Component({
	selector: "app-home",
	imports: [WhyMe, LinkArrow, Contact, References, Hero, Projects, Skills],
	templateUrl: "./home.html",
	styleUrl: "./home.scss",
})
export class Home {}
