import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	inject,
	NgZone,
	viewChild,
} from "@angular/core";
import { AnimationItem } from "lottie-web";
import { AnimationOptions, BaseDirective, LottieComponent } from "ngx-lottie";

@Component({
	selector: "app-lottie-checkbox",
	imports: [LottieComponent, BaseDirective],
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

	animationCreated(animationItem: AnimationItem): void {
		console.log(animationItem);
		this.animationItem = animationItem;
	}

	stop(): void {
		this.ngZone.runOutsideAngular(() => {
			this.animationItem?.stop();
		});
	}

	play(): void {
		this.ngZone.runOutsideAngular(() => {
			const currentDirection = this.animationItem!.playDirection;

			if (currentDirection === 1) {
				this.animationItem!.play();
				this.animationItem!.setDirection(-1);
			} else {
				this.animationItem!.play();
				this.animationItem!.setDirection(1);
			}
		});
	}
}
