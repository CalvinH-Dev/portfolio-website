import { Component, input } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
	selector: "app-form-group",
	imports: [FormsModule],
	templateUrl: "./form-group.html",
	styleUrl: "./form-group.scss",
})
export class FormGroup {
	/**
	 * Determines the alignment of the checkbox label.
	 * Can be either 'top' or 'bottom'.
	 */
	checkAlign = input<"top" | "bottom">("top");
}
