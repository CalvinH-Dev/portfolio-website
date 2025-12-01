import {
	ApplicationConfig,
	provideBrowserGlobalErrorListeners,
	provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter, withInMemoryScrolling, withViewTransitions } from "@angular/router";

import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideClientHydration, withIncrementalHydration } from "@angular/platform-browser";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZoneChangeDetection({ eventCoalescing: true }),
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
	],
};
