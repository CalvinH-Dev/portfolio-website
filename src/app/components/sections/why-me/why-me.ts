import { Component } from "@angular/core";

interface Feature {
	text: string;
	imgSrc: string;
	alt: string;
}

const featureList: Feature[] = [
	{ text: "open to relocate", imgSrc: "", alt: "" },
	{ text: "open to work remote", imgSrc: "", alt: "" },
];

@Component({
	selector: "app-why-me",
	imports: [],
	templateUrl: "./why-me.html",
	styleUrl: "./why-me.scss",
})
export class WhyMe {
	featureList: Feature[] = featureList;
}
