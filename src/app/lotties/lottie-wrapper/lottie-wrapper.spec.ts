import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LottieWrapper } from "./lottie-wrapper";

describe("LottieWrapper", () => {
	let component: LottieWrapper;
	let fixture: ComponentFixture<LottieWrapper>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [LottieWrapper],
		}).compileComponents();

		fixture = TestBed.createComponent(LottieWrapper);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
