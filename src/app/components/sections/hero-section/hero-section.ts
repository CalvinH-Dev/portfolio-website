import { Component } from "@angular/core";
import { LinkArrow } from "app/components/link-arrow/link-arrow";

@Component({
	selector: "app-hero-section",
	imports: [LinkArrow],
	templateUrl: "./hero-section.html",
	styleUrl: "./hero-section.scss",
})
export class HeroSection {}
