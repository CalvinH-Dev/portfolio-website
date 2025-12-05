import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Languages } from "app/components/languages/languages";
import { EmailBig } from "app/components/svg/email-big/email-big";
import { Github } from "app/components/svg/github/github";

@Component({
	selector: "app-socials",
	imports: [Languages, Github, EmailBig],
	templateUrl: "./socials.html",
	styleUrl: "./socials.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Socials {}
