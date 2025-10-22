import { ComponentFixture, TestBed } from "@angular/core/testing";

import { End } from "./end";

describe("EndSection", () => {
	let component: End;
	let fixture: ComponentFixture<End>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [End],
		}).compileComponents();

		fixture = TestBed.createComponent(End);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
