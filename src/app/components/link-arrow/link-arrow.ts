import { Component, input } from "@angular/core";

@Component({
	selector: "app-link-arrow",
	imports: [],
	templateUrl: "./link-arrow.html",
	styleUrl: "./link-arrow.scss",
})
export class LinkArrow {
	href = input<string>("");
	orientation = input<"left" | "right">("right");
	alignSelf = input<"start" | "center" | "end">("end");
}
