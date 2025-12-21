import { Component, input } from "@angular/core";
import { AnimationOptions } from "ngx-lottie";
import { BaseLottie } from "../base-lottie/base-lottie";

@Component({
	selector: "app-lottie-wrapper",
	imports: [BaseLottie],
	templateUrl: "./lottie-wrapper.html",
	styleUrl: "./lottie-wrapper.scss",
})
export class LottieWrapper {
	options = input<AnimationOptions | null>(null);
	visible = true;

	onHidden(): void {
		this.visible = false;
	}

	onVisible(): void {
		this.visible = true;
	}
}
