import { Component, input, output } from "@angular/core";
import { ProjectInterface } from "app/interfaces/project";

@Component({
	selector: "app-project",
	imports: [],
	templateUrl: "./project.html",
	styleUrl: "./project.scss",
})
export class Project {
	showAll = false;
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

	active = output<number>();

	onShowMore() {
		console.log(this.showAll);
		this.showAll = !this.showAll;
		if (this.showAll) {
			this.active.emit(this.index());
		}
	}
}
