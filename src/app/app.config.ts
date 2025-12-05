import {
	ApplicationConfig,
	provideBrowserGlobalErrorListeners,
	provideZonelessChangeDetection,
} from "@angular/core";
import { provideRouter, withInMemoryScrolling, withViewTransitions } from "@angular/router";

import { provideImageKitLoader } from "@angular/common";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideClientHydration, withIncrementalHydration } from "@angular/platform-browser";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZonelessChangeDetection(),
		provideRouter(
			routes,
			withInMemoryScrolling({
				scrollPositionRestoration: "enabled",
				anchorScrolling: "enabled",
			}),
			withViewTransitions(),
		),
		provideClientHydration(withIncrementalHydration()),
		provideHttpClient(withFetch()),
		provideImageKitLoader("https://ik.imagekit.io/dhpagryvx/Portfolio/"),
	],
};
