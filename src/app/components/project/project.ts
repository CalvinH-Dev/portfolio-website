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
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();
	isActive = input<boolean>();
	setActive = output();
	index = input<number>(1);
	projectInfo = input<ProjectInterface>({
		name: "",
		about: { EN: "", DE: "" },
		tech: { EN: "", DE: "" },
		learning: { EN: "", DE: "" },
		imageSrc: "",
		githubSrc: "",
		pageSrc: "",
	});

	onShowMore() {
		this.setActive.emit();
	}
}
