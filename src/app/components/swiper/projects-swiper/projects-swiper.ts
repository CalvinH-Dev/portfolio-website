import { afterNextRender, Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { LinkArrow } from "app/components/link-arrow/link-arrow";
import { AnimateOnScroll } from "app/directives/animation-on-scroll";
import { ProjectInterface } from "app/interfaces/project";
import { register } from "swiper/element/bundle";
import { ProjectSlide } from "./project-slide/project-slide";

register();

const projects: ProjectInterface[] = [
	{
		name: "Pokédex API",
		about: {
			DE: 'Die Pokédex-API liefert Pokémon-Daten über REST-Endpunkte wie "/api/v2/pokemon/{id}". Antworten im JSON-Format enthalten Namen, Typen, Fähigkeiten und Basiswerte.',
			EN: 'The Pokédex API provides Pokémon data via REST endpoints like "/api/v2/pokemon/{id}". JSON responses include name, types, abilities, and base stats.',
		},
		tech: {
			DE: 'Mit Vanilla JavaScript, "fetch" und "async/await" werden Daten asynchron geladen. Ein Lade-Spinner erscheint, bis die ersten Daten bereit sind.',
			EN: 'Using Vanilla JavaScript, "fetch", and "async/await", data loads asynchronously. A spinner shows until initial data is ready.',
		},
		learning: {
			DE: "Ich lernte, JSON-Daten einer API abzurufen, eine Suche einzubauen und Pokémon-Infos darzustellen.",
			EN: "I learned to fetch API JSON data, add a search, and display Pokémon details.",
		},
		imageSrc: "/compressed_pokedex.webp",
		width: "1590",
		height: "705",
		githubSrc: "https://github.com/CalvinH-Dev/pokemon-app",
		pageSrc: "https://pokedex.hanisch-dev.de",
		alt: {
			DE: "Bild der Pokedex API",
			EN: "Picture of Pokedex API",
		},
	},
	{
		name: "Join",
		about: {
			DE: "Join ist ein Kanban-Board, auf dem man Kontakte hinzufügen und Tasks erstellen, bearbeiten sowie zuweisen kann. Nutzer können sich anmelden und authentifizieren.",
			EN: "Join is a Kanban board where you can add contacts and create, edit, and assign tasks. Users can sign up and authenticate.",
		},
		tech: {
			DE: "Programmiert mit TypeScript, Angular und Firebase für Authentifizierung und Datenhaltung in Echtzeit.",
			EN: "Built with TypeScript, Angular, and Firebase for authentication and real-time data management.",
		},
		learning: {
			DE: "Ich lernte, Benutzer-Authentifizierung zu implementieren, CRUD-Operationen für Tasks zu gestalten und Daten in Echtzeit mit Firebase zu synchronisieren.",
			EN: "I learned to implement user authentication, handle CRUD operations for tasks, and sync data in real-time with Firebase.",
		},
		imageSrc: "/compressed_join.webp",
		width: "1373",
		height: "1057",
		githubSrc: "https://github.com/CalvinH-Dev/join",
		pageSrc: "https://join.hanisch-dev.de",
		alt: {
			DE: "Bild der Join App",
			EN: "Picture of Join App",
		},
	},
	{
		name: "Sharkie",
		about: {
			DE: "Schlüpfe in die Rolle eines hungrigen Hais und kämpfe dich durch den Ozean. Weiche Quallen und Fischen aus oder greife sie an, um stärker zu werden. Besiege den riesigen Wal als Endboss.",
			EN: "Play as a hungry shark and battle through the ocean. Avoid or attack jellyfish and fish to grow stronger, then defeat the giant whale boss.",
		},
		tech: {
			DE: 'Entwickelt mit Vanilla JavaScript unter Nutzung von Klassen, Vererbung und einer Game Loop mit "requestAnimationFrame".',
			EN: 'Built with Vanilla JavaScript using classes, inheritance, and a game loop via "requestAnimationFrame".',
		},
		learning: {
			DE: 'Ich lernte, wie man eine Game Loop mit "requestAnimationFrame" erstellt und Animationen per Klassen steuert.',
			EN: 'I learned to build a game loop with "requestAnimationFrame" and control animations using classes.',
		},
		imageSrc: "/compressed_sharkie.webp",
		width: "1597",
		height: "894",
		githubSrc: "https://github.com/CalvinH-Dev/da-oop-game-1",
		pageSrc: "https://sharkie.hanisch-dev.de",
		alt: {
			DE: "Bild des Sharkie Spiels",
			EN: "Picture of Sharkie Game",
		},
	},
];

@Component({
	selector: "app-projects-swiper",
	imports: [ProjectSlide, LinkArrow, AnimateOnScroll],
	templateUrl: "./projects-swiper.html",
	styleUrl: "./projects-swiper.scss",
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectsSwiper {
	projects = projects;

	constructor() {
		afterNextRender(() => {
			const swiperEl = document.querySelector("swiper-container")!;

			const swiperParams = {
				slidesPerView: 1,
				breakpoints: {
					1025: {
						slidesPerView: 2,
					},
					1400: {
						slidesPerView: 3,
					},
				},
			};

			Object.assign(swiperEl, swiperParams);

			swiperEl.initialize();
		});
	}
}
