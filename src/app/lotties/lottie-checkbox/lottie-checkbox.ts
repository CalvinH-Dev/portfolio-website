import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	inject,
	NgZone,
	output,
	viewChild,
} from "@angular/core";
import { AnimationDirection, AnimationItem } from "lottie-web";
import { AnimationOptions, LottieComponent } from "ngx-lottie";

@Component({
	selector: "app-lottie-checkbox",
	imports: [LottieComponent],
	templateUrl: "./lottie-checkbox.html",
	styleUrl: "./lottie-checkbox.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LottieCheckbox {
	options: AnimationOptions = {
		path: "/lotties/checkBox.json",
		autoplay: false,
		loop: false,
	};

	private animationItem: AnimationItem | undefined;
	private ngZone = inject(NgZone);

	lottie = viewChild<ElementRef>("lottie");
	checked = output<boolean>();

	animationCreated(animationItem: AnimationItem): void {
		this.animationItem = animationItem;
		this.animationItem.setSpeed(1.5);
	}

	animationComplete(): void {
		if (!this.animationItem) return;

		const invertedDirection = (this.animationItem.playDirection * -1) as AnimationDirection;
		this.animationItem.setDirection(invertedDirection);
	}
	stop(): void {
		this.ngZone.runOutsideAngular(() => {
			this.animationItem?.stop();
		});
	}

	play(): void {
		const currentDirection = this.animationItem!.playDirection;

		this.ngZone.runOutsideAngular(() => {
			if (currentDirection === 1) {
				this.animationItem!.play();
				this.checked.emit(true);
			} else {
				this.animationItem!.play();
				this.checked.emit(false);
			}
		});
	}
}
