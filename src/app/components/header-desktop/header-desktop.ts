import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { LanguageService } from "app/services/language";

@Component({
	selector: "app-header-desktop",
	imports: [RouterLink],
	templateUrl: "./header-desktop.html",
	styleUrl: "./header-desktop.scss",
})
export class HeaderDesktop {
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();

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
			console.log(targetPosition);
			scrollContainer.scrollTo({
				left: targetPosition,
				behavior: "smooth",
			});
		}
	}
}
