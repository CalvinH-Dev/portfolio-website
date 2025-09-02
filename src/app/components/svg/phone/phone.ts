import { Component, input } from "@angular/core";

@Component({
	selector: "app-phone",
	imports: [],
	templateUrl: "./phone.html",
	styleUrl: "./phone.scss",
})
export class Phone {
	hovered = input<boolean>(false);
}
