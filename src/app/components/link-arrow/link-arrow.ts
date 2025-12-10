import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AnimateOnScroll } from "app/directives/animation-on-scroll";
import { V1 } from "./svgs/v1/v1";
import { V2 } from "./svgs/v2/v2";
import { V3 } from "./svgs/v3/v3";
import { V4 } from "./svgs/v4/v4";

type LinkArrowVersionNumber = 1 | 2 | 3 | 4;

@Component({
	selector: "app-link-arrow",
	imports: [RouterLink, V1, V2, V3, V4, AnimateOnScroll],
	templateUrl: "./link-arrow.html",
	styleUrl: "./link-arrow.scss",
	host: { "[class.mobile]": 'show() === "mobile"', "[class.desktop]": 'show() === "desktop"' },
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkArrow {
	/**
	 * Determines on which screen size the arrow should be shown.
	 * Can be "mobile", "desktop", or "both".
	 */
	show = input<"mobile" | "desktop" | "both">("both");

	/**
	 * Optional fragment ID for the target element to scroll to.
	 */
	fragment = input<string>("");

	/**
	 * Orientation of the arrow.
	 * Can be "left", "right", or "up".
	 */
	orientation = input<"left" | "right" | "up">("right");

	/**
	 * Alignment of the arrow in its container.
	 * Can be "start", "center", or "end".
	 */
	alignSelf = input<"start" | "center" | "end">("end");

	/**
	 * Scrolls smoothly to a section in the main container when the arrow is clicked.
	 * @param event The mouse event triggered by clicking the arrow.
	 * @param id The target element ID to scroll to. Use "#" or "root" to scroll to the start.
	 */
	version = input<LinkArrowVersionNumber>(1);

	onProjectRefClicked(event: MouseEvent, id: string) {
		event.preventDefault();

		const scrollContainer = document.querySelector("main") as HTMLElement;
		if (!scrollContainer) return;

		if (id === "#" || id === "root") {
			scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
			return;
		}

		const target = document.getElementById(id);
		if (target && scrollContainer.contains(target)) {
			const targetPosition = target.offsetLeft;
			scrollContainer.scrollTo({
				left: targetPosition,
				behavior: "smooth",
			});
		}
	}
}
