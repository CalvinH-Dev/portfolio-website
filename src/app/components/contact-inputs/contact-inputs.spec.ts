import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ContactInputs } from "./contact-inputs";

describe("ContactInputs", () => {
	let component: ContactInputs;
	let fixture: ComponentFixture<ContactInputs>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ContactInputs],
		}).compileComponents();

		fixture = TestBed.createComponent(ContactInputs);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
