import { CommonModule, ViewportScroller } from "@angular/common";
import {
	ChangeDetectionStrategy,
	Component,
	inject,
	model,
	TemplateRef,
	viewChild,
} from "@angular/core";
import { Language } from "app/interfaces/languages";
import { DeviceService } from "app/services/device";
import { LanguageService } from "app/services/language";
import { Contact } from "../svg/contact/contact";
import { Hero } from "../svg/hero/hero";
import { Projects } from "../svg/projects/projects";
import { References } from "../svg/references/references";
import { Skills } from "../svg/skills/skills";
import { WhyMe } from "../svg/why-me/why-me";
import { MenuLink } from "./link/link";

@Component({
	selector: "app-menu",
	imports: [CommonModule, Projects, Contact, WhyMe, Hero, Skills, References, MenuLink],
	templateUrl: "./menu.html",
	styleUrl: "./menu.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Menu {
	startTemplate = viewChild("start", { read: TemplateRef });
	whyMeTemplate = viewChild("whyme", { read: TemplateRef });
	skillsTemplate = viewChild("skills", { read: TemplateRef });
	projectsTemplate = viewChild("projects", { read: TemplateRef });
	referencesTemplate = viewChild("references", { read: TemplateRef });
	contactTemplate = viewChild("contact", { read: TemplateRef });

	menuItems = [
		{
			fragment: "root",
			text: "start",
			rotate: "37deg",
			template: this.startTemplate,
		},
		{
			fragment: "why-me",
			text: "why me",
			rotate: "20deg",
			template: this.whyMeTemplate,
		},
		{
			fragment: "skills",
			text: "skills",
			rotate: "37deg",
			template: this.skillsTemplate,
		},
		{
			fragment: "projects",
			text: "projects",
			rotate: "15deg",
			template: this.projectsTemplate,
		},
		// {
		// 	fragment: "references",
		// 	text: "references",
		// 	rotate: "-13deg",
		// 	template: this.referencesTemplate,
		// },
		{
			fragment: "contact",
			text: "contact",
			rotate: "15deg",
			template: this.contactTemplate,
		},
	];
	/**
	 * Tracks whether the menu is open.
	 */
	menuOpen = model<boolean>();
	deviceService = inject(DeviceService);

	/**
	 * Language service instance for retrieving and updating the current language.
	 */
	languageService = inject(LanguageService);

	/**
	 * The current language signal.
	 */
	language = this.languageService.getLanguage();

	/**
	 * Viewport scroller instance for scrolling with offset.
	 * Offset is set to [0, 80] to account for header height.
	 */
	private viewportScroller = inject(ViewportScroller).setOffset([0, 80]);

	/**
	 * Closes the menu by setting `menuOpen` to false.
	 */
	closeMenu() {
		this.menuOpen.update(() => false);
	}

	/**
	 * Updates the application language.
	 * @param language The new language to set.
	 */
	onLanguageChange(language: Language) {
		this.languageService.setLanguage(language);
	}

	toggleMenu() {
		this.menuOpen.update((value) => !value);
	}
}
