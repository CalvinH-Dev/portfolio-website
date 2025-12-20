import { NgOptimizedImage } from "@angular/common";
import { Component, inject, input } from "@angular/core";
import { ProjectInterface } from "app/interfaces/project";
import { LottieActivity } from "app/lotties/lottie-activity/lottie-activity";
import { LanguageService } from "app/services/language";

@Component({
	selector: "app-project-slide",
	imports: [NgOptimizedImage, LottieActivity],
	templateUrl: "./project-slide.html",
	styleUrl: "./project-slide.scss",
})
export class ProjectSlide {
	project = input.required<ProjectInterface>();

	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();
}
