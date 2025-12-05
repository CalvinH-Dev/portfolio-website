import { ChangeDetectionStrategy, Component, inject, model } from "@angular/core";
import { RouterLink, RouterModule } from "@angular/router";
import { MenuButton } from "app/components/menu-button/menu-button";
import { LanguageService } from "app/services/language";

@Component({
	selector: "app-header",
	imports: [MenuButton, RouterModule, RouterLink],
	templateUrl: "./header.html",
	styleUrl: "./header.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
	/**
	 * Language service instance for retrieving the current language.
	 */
	languageService = inject(LanguageService);

	/**
	 * The current language signal.
	 */
	language = this.languageService.getLanguage();

	/**
	 * Tracks whether the menu is open.
	 */
	menuOpen = model<boolean>();

	/**
	 * Scrolls smoothly to the "projects" section when the corresponding link is clicked.
	 * @param event The mouse event triggered by clicking the project reference link.
	 */
	onProjectRefClicked(event: MouseEvent) {
		const id = "projects";
		const target = document.getElementById(id);

		if (target) {
			event.preventDefault();

			target.scrollIntoView({
				behavior: "smooth",
				inline: "start",
				block: "nearest",
			});
		}
	}
}
