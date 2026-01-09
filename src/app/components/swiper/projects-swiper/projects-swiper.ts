import { afterNextRender, Component, CUSTOM_ELEMENTS_SCHEMA, input } from "@angular/core";
import { LinkArrow } from "app/components/link-arrow/link-arrow";
import { ProjectInterface } from "app/interfaces/project";
import { register } from "swiper/element/bundle";
import { ProjectSlide } from "./project-slide/project-slide";

register();

@Component({
	selector: "app-projects-swiper",
	imports: [ProjectSlide, LinkArrow],
	templateUrl: "./projects-swiper.html",
	styleUrl: "./projects-swiper.scss",
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectsSwiper {
	projects = input.required<ProjectInterface[]>();

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
