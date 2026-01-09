import { Component } from "@angular/core";
import { ProjectsSwiper } from "app/components/swiper/projects-swiper/projects-swiper";
import { AnimateOnScroll } from "app/directives/animation-on-scroll";
import { ProjectInterface } from "app/interfaces/project";

const projects: ProjectInterface[] = [
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
		imageSrc: "join.avif",
		githubSrc: "https://github.com/CalvinH-Dev/join",
		pageSrc: "https://join.hanisch-dev.de",
		alt: {
			DE: "Bild der Join App",
			EN: "Picture of Join App",
		},
	},
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
		imageSrc: "pokedex.avif",
		githubSrc: "https://github.com/CalvinH-Dev/pokemon-app",
		pageSrc: "https://pokedex.hanisch-dev.de",
		alt: {
			DE: "Bild der Pokedex API",
			EN: "Picture of Pokedex API",
		},
	},

	{
		name: "Backend Project",
		about: {
			DE: "Ein Django-Backend-Projekt, das sich aktuell in Entwicklung befindet. Es wird RESTful APIs und serverseitige Logik zur Verfügung stellen.",
			EN: "A Django backend project currently in development. It will provide RESTful APIs and server-side logic.",
		},
		tech: {
			DE: "Entwickelt mit Django und Python. Nutzt Django REST Framework für API-Endpunkte und PostgreSQL als Datenbank.",
			EN: "Built with Django and Python. Uses Django REST Framework for API endpoints and PostgreSQL as database.",
		},
		learning: {
			DE: "Ich lerne, wie man skalierbare Backend-Architekturen mit Django aufbaut und sichere APIs entwickelt.",
			EN: "I'm learning to build scalable backend architectures with Django and develop secure APIs.",
		},
		imageSrc: "lottie",
		alt: {
			DE: "Bild des Backend Projekts",
			EN: "Picture of Backend Project",
		},
	},
	// {
	// 	name: "Sharkie",
	// 	about: {
	// 		DE: "Schlüpfe in die Rolle eines hungrigen Hais und kämpfe dich durch den Ozean. Weiche Quallen und Fischen aus oder greife sie an, um stärker zu werden. Besiege den riesigen Wal als Endboss.",
	// 		EN: "Play as a hungry shark and battle through the ocean. Avoid or attack jellyfish and fish to grow stronger, then defeat the giant whale boss.",
	// 	},
	// 	tech: {
	// 		DE: 'Entwickelt mit Vanilla JavaScript unter Nutzung von Klassen, Vererbung und einer Game Loop mit "requestAnimationFrame".',
	// 		EN: 'Built with Vanilla JavaScript using classes, inheritance, and a game loop via "requestAnimationFrame".',
	// 	},
	// 	learning: {
	// 		DE: 'Ich lernte, wie man eine Game Loop mit "requestAnimationFrame" erstellt und Animationen per Klassen steuert.',
	// 		EN: 'I learned to build a game loop with "requestAnimationFrame" and control animations using classes.',
	// 	},
	// 	imageSrc: "/compressed_sharkie.webp",
	// 	githubSrc: "https://github.com/CalvinH-Dev/da-oop-game-1",
	// 	pageSrc: "https://sharkie.hanisch-dev.de",
	// 	alt: {
	// 		DE: "Bild des Sharkie Spiels",
	// 		EN: "Picture of Sharkie Game",
	// 	},
	// },
];

@Component({
	selector: "app-projects",
	imports: [ProjectsSwiper, AnimateOnScroll],
	templateUrl: "./projects.html",
	styleUrl: "./projects.scss",
})
export class Projects {
	projects = projects;
}
