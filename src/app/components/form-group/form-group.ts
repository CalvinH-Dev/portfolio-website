import { Component, input } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
	selector: "app-form-group",
	imports: [FormsModule],
	templateUrl: "./form-group.html",
	styleUrl: "./form-group.scss",
})
export class FormGroup {
	checkAlign = input<"top" | "bottom">("top");
}
