import { Component, input, output } from "@angular/core";
import { ProjectInterface } from "app/interfaces/project";

@Component({
	selector: "app-project",
	imports: [],
	templateUrl: "./project.html",
	styleUrl: "./project.scss",
})
export class Project {
	isActive = input<boolean>();
	setActive = output();
	index = input<number>(1);
	projectInfo = input<ProjectInterface>({
		name: "",
		about: "",
		tech: "",
		learning: "",
		imageSrc: "",
		githubSrc: "",
		pageSrc: "",
	});

	onShowMore() {
		this.setActive.emit();
	}
}
