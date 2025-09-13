import {
	AfterViewInit,
	Component,
	ElementRef,
	inject,
	viewChild,
	viewChildren,
} from "@angular/core";
import { LinkArrow } from "app/components/link-arrow/link-arrow";
import { ColleagueReview } from "app/interfaces/colleague-review";
import { LanguageService } from "app/services/language";

const colleagues: ColleagueReview[] = [
	{
		name: "Noah Mueller",
		project: "Pollo Loco",
		text: {
			EN: "Michael had to develop, format and deliver content in collaboration with the team members. He is a reliable and friendly person.",
			DE: "Michael musste Inhalte in Zusammenarbeit mit den Teammitgliedern entwickeln, formatieren und liefern. Er ist eine zuverlässige und freundliche Person.",
		},
	},
	{
		name: "James Rugman",
		project: "Join",
		text: {
			EN: "Michael is a reliable and friendly person. Work in a structured way and write a clear code. I recommend him as a colleague.",
			DE: "Michael ist eine zuverlässige und freundliche Person. Er arbeitet strukturiert und schreibt klaren Code. Ich empfehle ihn als Kollegen.",
		},
	},
	{
		name: "Evelyn Marx",
		project: "DA Bubble",
		text: {
			EN: "He is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code.",
			DE: "Er ist ein vertrauenswürdiger Teamplayer und kommt mit dem Stress von Deadlines gut zurecht. Er arbeitet strukturiert und schreibt klaren Code.",
		},
	},
];

@Component({
	selector: "app-colleagues",
	imports: [LinkArrow],
	templateUrl: "./colleagues.html",
	styleUrl: "./colleagues.scss",
})
export class Colleagues implements AfterViewInit {
	languageService = inject(LanguageService);
	language = this.languageService.getLanguage();

	activeSlideIdx = 0;
	observer: IntersectionObserver | null = null;

	colleagues = colleagues;

	cards = viewChildren<ElementRef>("card");
	container = viewChild<ElementRef>("slider");

	ngAfterViewInit() {
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
}
