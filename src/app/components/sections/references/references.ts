import {
	AfterViewInit,
	Component,
	ElementRef,
	HostListener,
	inject,
	OnDestroy,
	viewChild,
	viewChildren,
} from "@angular/core";
import { LinkArrow } from "app/components/link-arrow/link-arrow";
import { ColleagueReview } from "app/interfaces/colleague-review";
import { LanguageService } from "app/services/language";

const colleagues: ColleagueReview[] = [
	// {
	// 	name: "Christoph Konst",
	// 	project: "Join",
	// 	text: {
	// 		EN: "Calvin demonstrated strong leadership qualities during our group project and consistently ensured that the team worked in a structured and goal-oriented manner. With his extensive knowledge in relevant areas, he was always a valuable support and able to explain complex topics clearly and understandably. Thanks to his excellent overview of the entire project, he kept the big picture in mind even during demanding phases and made a decisive contribution to the success of our collaboration.",
	// 		DE: "Calvin hat in unserer Gruppenarbeit starke Führungsqualitäten bewiesen und sorgte stets dafür, dass das Team strukturiert und zielgerichtet arbeiten konnte. Durch sein umfassendes Wissen in den relevanten Bereichen war er jederzeit eine wertvolle Unterstützung und konnte komplexe Themen klar und verständlich erklären. Dank seines guten Überblicks über das Gesamtprojekt behielt er auch in anspruchsvollen Phasen den roten Faden und trug maßgeblich zum Erfolg unserer Zusammenarbeit bei.",
	// 	},
	// },
	{
		name: "Phillip Schulze",
		project: "Join",
		text: {
			EN: "Calvin is a highly skilled and intelligent colleague whose extensive expertise and willingness to share knowledge have greatly enriched our team. His assumption of the team lead role was pivotal to the project’s success. With his strong ability to learn quickly and master new technologies, he ensured the delivery of a high-quality product. His contributions to code reviews, offering constructive feedback and valuable insights, significantly improved the overall code quality across the team. ",
			DE: "Calvin ist ein äußerst versierter und intelligenter Kollege, dessen umfassendes Fachwissen und seine Bereitschaft, dieses zu teilen, unser gesamtes Team bereichert haben. Seine Übernahme der Teamleitung war ausschlaggebend für den Projekterfolg, wobei seine exzellenten Fähigkeiten in der Wissensaneignung und die schnelle Beherrschung neuer Technologien die Fertigstellung eines qualitativ hochwertigen Projekts erst ermöglichten. Besonders hervorzuheben ist seine Rolle im Code Review, wo er durch konstruktives Feedback und wertvolle Ratschläge maßgeblich zur Steigerung der Code-Qualität im gesamten Team beigetragen hat.",
		},
	},
	{
		name: "Falko Katzer",
		project: "Join",
		text: {
			EN: "Calvin was an outstanding support to the team — both technically and personally. His code was always clean, efficient, and well thought out, and he was always available to help with any question. No matter how complex the problem, Calvin always had a solution. His comprehensive programming knowledge and calm, competent manner made him an indispensable point of contact for all team members.",
			DE: "Calvin war eine herausragende Unterstützung im Team – fachlich wie menschlich. Sein Code war stets sauber, effizient und durchdacht, und bei Fragen konnte man sich jederzeit auf seine Hilfe verlassen. Egal wie komplex das Problem war, Calvin hatte immer eine Lösung parat. Sein umfassendes Programmierwissen und seine ruhige, kompetente Art machten ihn zu einem unverzichtbaren Ansprechpartner für alle Teammitglieder.",
		},
	},
	{
		name: "Madina Askar Zada",
		project: "Join",
		text: {
			EN: "Calvin played a crucial role in the overall success of the project. He was responsible for key components such as the contact list, header, and authentication features, while also ensuring consistent design and functionality across the application. His strong technical skills, reliability, and proactive approach made him a driving force behind the team’s progress. Calvin consistently went above and beyond to support others and ensure the best possible result.",
			DE: "Calvin spielte eine entscheidende Rolle für den Gesamterfolg des Projekts. Er war verantwortlich für zentrale Komponenten wie die Kontaktliste, den Header und die Authentifizierungsfunktionen und sorgte gleichzeitig für ein konsistentes Design und eine einheitliche Funktionalität in der gesamten Anwendung. Seine starken technischen Fähigkeiten, seine Zuverlässigkeit und sein proaktiver Ansatz machten ihn zu einer treibenden Kraft hinter dem Fortschritt des Teams. Calvin unterstützte andere stets über das Erwartete hinaus und sorgte so für das bestmögliche Ergebnis.",
		},
	},
];

@Component({
	selector: "app-references",
	imports: [LinkArrow],
	templateUrl: "./references.html",
	styleUrl: "./references.scss",
})
export class References implements AfterViewInit, OnDestroy {
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();

	activeSlideIdx = 0;
	observer: IntersectionObserver | null = null;

	colleagues = colleagues;

	cards = viewChildren<ElementRef>("card");
	container = viewChild<ElementRef>("slider");

	private animationId: number | null = null;
	private scrollDirection = 1; // 1 = runter, -1 = hoch
	private speed = 0.25; // Pixel pro Frame
	private scrollPosition = 0;

	ngAfterViewInit() {
		this.startAutoScroll();

		this.observer = new IntersectionObserver(
			(entries) => {
				this.observeSliderChildrenScroll(entries);
			},
			{
				root: this.container()?.nativeElement,
				threshold: [0.5],
			},
		);
		this.cards().forEach((el) => this.observer?.observe(el.nativeElement));
	}

	private observeSliderChildrenScroll(entries: IntersectionObserverEntry[]) {
		let mostVisible: IntersectionObserverEntry | null = null;
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (!mostVisible || entry.intersectionRatio > mostVisible.intersectionRatio) {
					mostVisible = entry;
				}
			}
		});
		if (mostVisible) {
			const index = this.cards().findIndex((el) => el.nativeElement === mostVisible!.target);
			this.activeSlideIdx = index;
		}
	}

	ngOnDestroy() {
		if (this.animationId !== null) cancelAnimationFrame(this.animationId);
	}

	@HostListener("window:resize")
	onResize() {
		if (window.innerWidth < 768) {
			this.stopAutoScroll();
		} else {
			this.startAutoScroll();
		}
	}

	private startAutoScroll() {
		if (window.innerWidth < 768 || this.animationId !== null) return;

		const step = () => {
			const el = this.container()!.nativeElement;

			this.scrollPosition += this.scrollDirection * this.speed;
			el.scrollTop = this.scrollPosition;

			if (this.scrollPosition + el.clientHeight >= el.scrollHeight) {
				this.scrollDirection = -1;
			} else if (this.scrollPosition <= 0) {
				this.scrollDirection = 1;
			}

			this.animationId = requestAnimationFrame(step);
		};

		this.animationId = requestAnimationFrame(step);
	}

	private stopAutoScroll() {
		if (this.animationId !== null) {
			cancelAnimationFrame(this.animationId);
			this.animationId = null;
		}
	}
}
