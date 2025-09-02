import { AfterViewInit, Component, ElementRef, viewChild, viewChildren } from "@angular/core";
import { ColleagueReview } from "app/interfaces/colleague-review";

const colleagues: ColleagueReview[] = [
	{
		name: "",
		project: "",
		text: "",
	},
	{
		name: "",
		project: "",
		text: "",
	},
	{
		name: "",
		project: "",
		text: "",
	},
];

@Component({
	selector: "app-colleagues",
	imports: [],
	templateUrl: "./colleagues.html",
	styleUrl: "./colleagues.scss",
})
export class Colleagues implements AfterViewInit {
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
