import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
	selector: "app-svg-remote",
	imports: [],
	templateUrl: "./remote.html",
	styleUrl: "./remote.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Remote {}
