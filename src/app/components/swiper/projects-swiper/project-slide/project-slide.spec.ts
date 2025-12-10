import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjectSlide } from "./project-slide";

describe("Project", () => {
	let component: Project;
	let fixture: ComponentFixture<ProjectSlide>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProjectSlide],
		}).compileComponents();

		fixture = TestBed.createComponent(ProjectSlide);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
