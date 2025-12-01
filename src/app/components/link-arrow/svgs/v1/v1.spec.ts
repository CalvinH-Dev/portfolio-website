import { ComponentFixture, TestBed } from "@angular/core/testing";

import { V1 } from "./v1";

describe("V1", () => {
	let component: V1;
	let fixture: ComponentFixture<V1>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [V1],
		}).compileComponents();

		fixture = TestBed.createComponent(V1);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
