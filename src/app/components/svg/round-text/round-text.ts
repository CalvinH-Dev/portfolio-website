import { Component, input } from "@angular/core";

@Component({
	selector: "app-svg-round-text",
	imports: [],
	templateUrl: "./round-text.html",
	styleUrl: "./round-text.scss",
})
export class RoundText {
	text = input<string>("");
	rotate = input<string>("0deg");
}
