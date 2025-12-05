import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
	selector: "app-svg-phone",
	imports: [],
	templateUrl: "./phone.html",
	styleUrl: "./phone.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Phone {}
