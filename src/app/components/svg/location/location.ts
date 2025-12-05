import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
	selector: "app-svg-location",
	imports: [],
	templateUrl: "./location.html",
	styleUrl: "./location.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Location {}
