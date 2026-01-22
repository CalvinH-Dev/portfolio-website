import { NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LinkArrow } from "app/components/link-arrow/link-arrow";

@Component({
	selector: "app-hero",
	imports: [LinkArrow, NgOptimizedImage],
	templateUrl: "./hero.html",
	styleUrl: "./hero.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {}
