import { Component } from "@angular/core";
import { Project } from "app/components/project/project";
import { ProjectInterface } from "app/interfaces/project";

const projects: ProjectInterface[] = [
	{
		name: "Join",
		about: "Loremsadasd as asdasd asd sadas asd asdas saasdsa sad sasa asdas asdas",
		tech: "test2",
		learning: "test3",
		imageSrc: "",
		githubSrc: "",
		pageSrc: "",
	},
	{
		name: "Sharkie",
		about:
			"Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
		tech: "test2",
		learning:
			"Maybe you used a certain technology for the first time? Have you learnt more about how to keep your code clean or how to organise the components in your projects?",
		imageSrc: "",
		githubSrc: "",
		pageSrc: "",
	},
	{
		name: "Join",
		about: "test",
		tech: "test2",
		learning: "test3",
		imageSrc: "",
		githubSrc: "",
		pageSrc: "",
	},
];

@Component({
	selector: "app-my-work",
	imports: [Project],
	templateUrl: "./my-work.html",
	styleUrl: "./my-work.scss",
})
export class MyWork {
	activeIdx = 0;
	projects: ProjectInterface[] = projects;

	setActiveProject(index: number) {
		this.activeIdx = index;
	}
}
