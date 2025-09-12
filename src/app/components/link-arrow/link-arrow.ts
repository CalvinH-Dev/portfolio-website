import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-link-arrow",
	imports: [RouterLink],
	templateUrl: "./link-arrow.html",
	styleUrl: "./link-arrow.scss",
})
export class LinkArrow {
	fragment = input<string>("");
	orientation = input<"left" | "right">("right");
	alignSelf = input<"start" | "center" | "end">("end");
}
