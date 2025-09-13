import { Component, inject } from "@angular/core";
import { LinkArrow } from "app/components/link-arrow/link-arrow";
import { Project } from "app/components/project/project";
import { ProjectInterface } from "app/interfaces/project";
import { LanguageService } from "app/services/language";

const projects: ProjectInterface[] = [
	{
		name: "Sharkie",
		about: {
			DE: "Schlüpfe in die Rolle eines hungrigen Hais und kämpfe dich durch die Tiefen des Ozeans. Weiche gefährlichen Quallen und Fischen aus oder greife sie an, um stärker zu werden. Besiege den riesigen Wal als Endboss, um das Spiel zu gewinnen.",
			EN: "Take on the role of a hungry shark and fight your way through the depths of the ocean. Avoid or attack dangerous jellyfish and fish to grow stronger. Defeat the massive whale boss to win the game.",
		},
		tech: {
			DE: "Das Spiel wurde mit Vanilla JavaScript entwickelt, unter Verwendung von Klassen, Vererbung und einer Game Loop mit `requestAnimationFrame`.",
			EN: "The game was developed using Vanilla JavaScript, utilizing classes, inheritance, and a game loop with `requestAnimationFrame`.",
		},
		learning: {
			DE: "Ich habe gelernt, wie man eine Game Loop mit `requestAnimationFrame` erstellt, Klassen in JavaScript verwendet und Animationen zeitlich steuert.",
			EN: "I learned how to create a game loop using `requestAnimationFrame`, utilize classes in JavaScript, and time animations effectively.",
		},
		imageSrc: "img/my-work/sharkie.webp",
		githubSrc: "https://github.com/CalvinH-Dev/da-oop-game-1",
		pageSrc: "https://sharkie.hanisch-dev.de",
	},
	{
		name: "Pokédex API",
		about: {
			DE: "Die Pokédex-API ermöglicht den Abruf von Pokémon-Daten über RESTful-Endpunkte wie `/api/v2/pokemon/{id}`. Die Antworten werden im JSON-Format bereitgestellt und enthalten Informationen wie Name, Typen, Fähigkeiten und Basiswerte.",
			EN: "The Pokédex API allows fetching Pokémon data through RESTful endpoints like `/api/v2/pokemon/{id}`. Responses are provided in JSON format and include information such as name, types, abilities, and base stats.",
		},
		tech: {
			DE: "Ich habe Vanilla JavaScript mit `fetch` und `async/await` genutzt, um Daten asynchron im Hintergrund abzurufen. Dabei wird die Seite initialisiert, ein Lade-Spinner angezeigt und nach dem Laden der ersten Daten verschwindet der Spinner, während weitere Daten im Hintergrund geladen werden.",
			EN: "I used Vanilla JavaScript with `fetch` and `async/await` to fetch data asynchronously in the background. The page is initialized, a loading spinner is shown, and after the first data is loaded, the spinner disappears while additional data is fetched in the background.",
		},
		learning: {
			DE: "Ich habe gelernt, wie man Daten von einer Pokédex-API im JSON-Format abruft, eine Suchfunktion implementiert und zusätzliche Pokémon-Informationen anzeigt.",
			EN: "I learned how to fetch data from a Pokédex API in JSON format, implement a search function, and display additional Pokémon information.",
		},
		imageSrc: "img/my-work/pokedex.webp",
		githubSrc: "https://github.com/CalvinH-Dev/pokemon-app",
		pageSrc: "https://pokedex.hanisch-dev.de",
	},
];

@Component({
	selector: "app-my-work",
	imports: [Project, LinkArrow],
	templateUrl: "./my-work.html",
	styleUrl: "./my-work.scss",
})
export class MyWork {
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();

	activeIdx = 0;
	projects: ProjectInterface[] = projects;

	setActiveProject(index: number) {
		if (index === this.activeIdx) {
			if (index === projects.length - 1) {
				this.activeIdx = index - 1;
			} else {
				this.activeIdx = index + 1;
			}
		} else {
			this.activeIdx = index;
		}
	}
}
