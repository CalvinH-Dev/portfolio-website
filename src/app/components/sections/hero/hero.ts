import { Component } from "@angular/core";
import { LinkArrow } from "app/components/link-arrow/link-arrow";
import { AnimateOnScroll } from "app/directives/animation-on-scroll";

@Component({
	selector: "app-hero",
	imports: [LinkArrow, AnimateOnScroll],
	templateUrl: "./hero.html",
	styleUrl: "./hero.scss",
})
export class Hero {}
