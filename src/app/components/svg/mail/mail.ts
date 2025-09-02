import { Component, input } from "@angular/core";

@Component({
	selector: "app-mail",
	imports: [],
	templateUrl: "./mail.html",
	styleUrl: "./mail.scss",
})
export class Mail {
	hovered = input<boolean>(false);
}
