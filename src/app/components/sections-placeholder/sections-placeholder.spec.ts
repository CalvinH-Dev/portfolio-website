import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SectionsPlaceholder } from "./sections-placeholder";

describe("SectionsPlaceholder", () => {
	let component: SectionsPlaceholder;
	let fixture: ComponentFixture<SectionsPlaceholder>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SectionsPlaceholder],
		}).compileComponents();

		fixture = TestBed.createComponent(SectionsPlaceholder);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
