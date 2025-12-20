import { ChangeDetectionStrategy, Component } from "@angular/core";
import { IntersectionObserverDirective } from "app/directives/intersection-observer-directive";
import { AnimationItem } from "lottie-web";
import { AnimationOptions, LottieComponent } from "ngx-lottie";

@Component({
	selector: "app-lottie-activity",
	imports: [LottieComponent, IntersectionObserverDirective],
	templateUrl: "./lottie-activity.html",
	styleUrl: "./lottie-activity.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LottieActivity {
	options: AnimationOptions = {
		path: "/lotties/activity.json",
		autoplay: true,
		loop: true,
	};

	private animationItem: AnimationItem | undefined;

	animationCreated(animationItem: AnimationItem): void {
		this.animationItem = animationItem;
		this.animationItem.setSpeed(0.75);
	}

	onHidden() {
		this.animationItem?.pause();
	}

	onVisible() {
		this.animationItem?.play();
	}
}
