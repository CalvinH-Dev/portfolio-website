import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RoundText } from "./round-text";

describe("RoundText", () => {
	let component: RoundText;
	let fixture: ComponentFixture<RoundText>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RoundText],
		}).compileComponents();

		fixture = TestBed.createComponent(RoundText);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
