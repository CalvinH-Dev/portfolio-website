import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
	providedIn: "root",
})
export class ScrollNavigationService {
	private router = inject(Router);

	async scrollToSection(event: MouseEvent, id: string): Promise<void> {
		// event.preventDefault();
		// event.stopPropagation();
		// const scrollContainer = document.querySelector("main") as HTMLElement;
		// if (!scrollContainer) return;
		// if (id === "#" || id === "root") {
		// 	scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
		// 	return;
		// }
		// let target = document.getElementById(id);
		// console.log(target);
		// if (!target) {
		// 	scrollContainer.scrollTo({ left: 0, behavior: "instant" });
		// 	console.log("hier should scroll");
		// 	await new Promise((resolve) => setTimeout(resolve, 100));
		// 	target = document.getElementById(id);
		// }
		// if (target && scrollContainer.contains(target)) {
		// 	const targetPosition = target.offsetLeft;
		// 	scrollContainer.scrollTo({
		// 		left: targetPosition,
		// 		behavior: "smooth",
		// 	});
		// }
	}
}
