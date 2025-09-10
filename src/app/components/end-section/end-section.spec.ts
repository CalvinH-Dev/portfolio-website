import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EndSection } from "./end-section";

describe("EndSection", () => {
	let component: EndSection;
	let fixture: ComponentFixture<EndSection>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [EndSection],
		}).compileComponents();

		fixture = TestBed.createComponent(EndSection);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
