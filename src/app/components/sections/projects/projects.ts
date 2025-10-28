import { Component, inject } from "@angular/core";
import { LinkArrow } from "app/components/link-arrow/link-arrow";
import { Project } from "app/components/project/project";
import { ProjectInterface } from "app/interfaces/project";
import { LanguageService } from "app/services/language";

const projects: ProjectInterface[] = [
	{
		name: "Sharkie",
		about: {
			DE: "Schlüpfe in die Rolle eines hungrigen Hais und kämpfe dich durch den Ozean. Weiche Quallen und Fischen aus oder greife sie an, um stärker zu werden. Besiege den riesigen Wal als Endboss.",
			EN: "Play as a hungry shark and battle through the ocean. Avoid or attack jellyfish and fish to grow stronger, then defeat the giant whale boss.",
		},
		tech: {
			DE: "Entwickelt mit Vanilla JavaScript unter Nutzung von Klassen, Vererbung und einer Game Loop mit `requestAnimationFrame`.",
			EN: "Built with Vanilla JavaScript using classes, inheritance, and a game loop via `requestAnimationFrame`.",
		},
		learning: {
			DE: "Ich lernte, wie man eine Game Loop mit `requestAnimationFrame` erstellt und Animationen per Klassen steuert.",
			EN: "I learned to build a game loop with `requestAnimationFrame` and control animations using classes.",
		},
		imageSrc: "img/projects/sharkie.webp",
		githubSrc: "https://github.com/CalvinH-Dev/da-oop-game-1",
		pageSrc: "https://sharkie.hanisch-dev.de",
	},
	{
		name: "Pokédex API",
		about: {
			DE: "Die Pokédex-API liefert Pokémon-Daten über REST-Endpunkte wie `/api/v2/pokemon/{id}`. Antworten im JSON-Format enthalten Namen, Typen, Fähigkeiten und Basiswerte.",
			EN: "The Pokédex API provides Pokémon data via REST endpoints like `/api/v2/pokemon/{id}`. JSON responses include name, types, abilities, and base stats.",
		},
		tech: {
			DE: "Mit Vanilla JavaScript, `fetch` und `async/await` werden Daten asynchron geladen. Ein Lade-Spinner erscheint, bis die ersten Daten bereit sind.",
			EN: "Using Vanilla JavaScript, `fetch`, and `async/await`, data loads asynchronously. A spinner shows until initial data is ready.",
		},
		learning: {
			DE: "Ich lernte, JSON-Daten einer API abzurufen, eine Suche einzubauen und Pokémon-Infos darzustellen.",
			EN: "I learned to fetch API JSON data, add a search, and display Pokémon details.",
		},
		imageSrc: "img/projects/pokedex.webp",
		githubSrc: "https://github.com/CalvinH-Dev/pokemon-app",
		pageSrc: "https://pokedex.hanisch-dev.de",
	},
];

@Component({
	selector: "app-projects",
	imports: [Project, LinkArrow],
	templateUrl: "./projects.html",
	styleUrl: "./projects.scss",
})
export class Projects {
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
