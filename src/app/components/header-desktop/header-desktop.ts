import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { LanguageService } from "app/services/language";

@Component({
	selector: "app-header-desktop",
	imports: [RouterLink],
	templateUrl: "./header-desktop.html",
	styleUrl: "./header-desktop.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderDesktop {
	/**
	 * Language service instance for retrieving the current language.
	 */
	languageService = inject(LanguageService);

	/**
	 * The current language signal.
	 */
	language = this.languageService.language;

	/**
	 * Scrolls smoothly to a section in the main container when a link is clicked.
	 * @param event The mouse event triggered by clicking the link.
	 * @param id The target element ID to scroll to. Use "#" or "root" to scroll to the start.
	 */
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
