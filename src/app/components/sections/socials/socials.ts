import { Component } from "@angular/core";
import { Languages } from "app/components/languages/languages";
import { Github } from "app/components/svg/github/github";

@Component({
	selector: "app-socials",
	imports: [Languages, Github],
	templateUrl: "./socials.html",
	styleUrl: "./socials.scss",
})
export class Socials {}
