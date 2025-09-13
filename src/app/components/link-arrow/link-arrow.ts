import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-link-arrow",
	imports: [RouterLink],
	templateUrl: "./link-arrow.html",
	styleUrl: "./link-arrow.scss",
	host: { "[class.mobile]": 'show() === "mobile"', "[class.desktop]": 'show() === "desktop"' },
})
export class LinkArrow {
	show = input<"mobile" | "desktop" | "both">("both");
	fragment = input<string>("");
	orientation = input<"left" | "right" | "up">("right");
	alignSelf = input<"start" | "center" | "end">("end");
}
