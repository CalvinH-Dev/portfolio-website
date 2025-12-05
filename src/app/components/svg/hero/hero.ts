import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
	selector: "app-svg-hero",
	imports: [],
	templateUrl: "./hero.html",
	styleUrl: "./hero.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {}
