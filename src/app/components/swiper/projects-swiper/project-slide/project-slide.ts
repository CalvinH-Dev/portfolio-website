import { NgOptimizedImage } from "@angular/common";
import { Component, inject, input } from "@angular/core";
import { ProjectInterface } from "app/interfaces/project";
import { LanguageService } from "app/services/language";

@Component({
	selector: "app-project-slide",
	imports: [NgOptimizedImage],
	templateUrl: "./project-slide.html",
	styleUrl: "./project-slide.scss",
})
export class ProjectSlide {
	project = input.required<ProjectInterface>();

	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();
}
