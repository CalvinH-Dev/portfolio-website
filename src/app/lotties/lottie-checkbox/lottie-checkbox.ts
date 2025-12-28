import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	inject,
	model,
	NgZone,
	OnChanges,
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
export class LottieCheckbox implements OnChanges {
	options: AnimationOptions = {
		path: "/lotties/checkBox.json",
		autoplay: false,
		loop: false,
	};

	private animationItem: AnimationItem | undefined;
	private ngZone = inject(NgZone);

	lottie = viewChild<ElementRef>("lottie");
	checked = model<boolean>();

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
		this.ngZone.runOutsideAngular(() => {
			this.animationItem!.play();
		});
	}

	ngOnChanges() {
		console.log("hier");
		if (!this.animationItem) return;

		const valueChanged =
			(this.animationItem!.playDirection === 1 && this.checked()) ||
			(this.animationItem!.playDirection === -1 && !this.checked());
		if (valueChanged) {
			this.play();
		}
	}
}
