import { Component } from "@angular/core";
import { Feature } from "app/interfaces/feature";
import { Contact } from "../contact/contact";

const featureList: Feature[] = [
	{ text: "open to relocate", imgSrc: "img/why-me/relocate.png", alt: "" },
	{ text: "open to work remote", imgSrc: "img/why-me/remote.png", alt: "" },
];

@Component({
	selector: "app-why-me",
	imports: [Contact],
	templateUrl: "./why-me.html",
	styleUrl: "./why-me.scss",
})
export class WhyMe {
	featureList: Feature[] = featureList;
}
