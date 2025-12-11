import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjectsSwiper } from "./projects-swiper";

describe("ProjectsSwiper", () => {
	let component: ProjectsSwiper;
	let fixture: ComponentFixture<ProjectsSwiper>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProjectsSwiper],
		}).compileComponents();

		fixture = TestBed.createComponent(ProjectsSwiper);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
