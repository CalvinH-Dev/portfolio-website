import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AnimationItem } from "lottie-web";
import { AnimationOptions, LottieComponent } from "ngx-lottie";

@Component({
	selector: "app-lottie-activity",
	imports: [LottieComponent],
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

	animationCreated(animationItem: AnimationItem): void {
		animationItem.setSpeed(0.75);
	}
}
