import { Component, inject, input, output } from "@angular/core";
import { ProjectInterface } from "app/interfaces/project";
import { LanguageService } from "app/services/language";

@Component({
	selector: "app-project",
	imports: [],
	templateUrl: "./project.html",
	styleUrl: "./project.scss",
})
export class Project {
	/**
	 * Language service instance for retrieving the current language.
	 */
	languageService = inject(LanguageService);

	/**
	 * The current language signal.
	 */
	language = this.languageService.getLanguage();

	/**
	 * Indicates whether the project is active.
	 */
	isActive = input<boolean>();

	/**
	 * Output event emitter for setting the active project.
	 */
	setActive = output();

	/**
	 * Index of the project in the list. Defaults to 1.
	 */
	index = input<number>(1);

	/**
	 * Project information including name, descriptions, technologies, and links.
	 */
	projectInfo = input<ProjectInterface>({
		name: "",
		about: { EN: "", DE: "" },
		tech: { EN: "", DE: "" },
		learning: { EN: "", DE: "" },
		imageSrc: "",
		githubSrc: "",
		pageSrc: "",
	});

	/**
	 * Emits the `setActive` event when the "Show More" action is triggered.
	 */
	onShowMore() {
		this.setActive.emit();
	}
}
