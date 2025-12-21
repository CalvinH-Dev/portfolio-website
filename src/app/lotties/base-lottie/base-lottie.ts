import { Component, ElementRef, inject, input, OnDestroy } from "@angular/core";
import { AnimationItem } from "lottie-web";
import { AnimationOptions, LottieComponent } from "ngx-lottie";

@Component({
	selector: "app-base-lottie",
	imports: [LottieComponent],
	templateUrl: "./base-lottie.html",
	styleUrl: "./base-lottie.scss",
})
export class BaseLottie implements OnDestroy {
	options = input<AnimationOptions | null>(null);
	speed = input<number>(1);
	private animationItem: AnimationItem | undefined;
	private elementRef = inject(ElementRef);

	animationCreated(animationItem: AnimationItem): void {
		this.animationItem = animationItem;
		this.animationItem.setSpeed(this.speed());
	}

	ngOnDestroy(): void {
		if (this.animationItem) {
			this.animationItem.destroy();
		}
	}
}
