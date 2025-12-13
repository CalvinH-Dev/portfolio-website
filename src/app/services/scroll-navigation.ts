import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
	providedIn: "root",
})
export class ScrollNavigationService {
	private router = inject(Router);

	scrollToSection(event: MouseEvent, id: string): void {
		event.preventDefault();
		event.stopPropagation();

		const scrollContainer = document.querySelector("main") as HTMLElement;
		if (!scrollContainer) return;

		if (id === "#" || id === "root") {
			scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
			this.router.navigate(["/"], { replaceUrl: true });
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
