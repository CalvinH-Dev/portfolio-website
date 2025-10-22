import { Component } from "@angular/core";
import { LinkArrow } from "app/components/link-arrow/link-arrow";

@Component({
	selector: "app-hero",
	imports: [LinkArrow],
	templateUrl: "./hero.html",
	styleUrl: "./hero.scss",
})
export class Hero {}
