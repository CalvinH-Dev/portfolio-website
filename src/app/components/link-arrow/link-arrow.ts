import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-link-arrow",
	imports: [RouterLink],
	templateUrl: "./link-arrow.html",
	styleUrl: "./link-arrow.scss",
	host: { "[class.mobile]": 'show() === "mobile"', "[class.desktop]": 'show() === "desktop"' },
})
export class LinkArrow {
	show = input<"mobile" | "desktop" | "both">("both");
	fragment = input<string>("");
	orientation = input<"left" | "right" | "up">("right");
	alignSelf = input<"start" | "center" | "end">("end");

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
