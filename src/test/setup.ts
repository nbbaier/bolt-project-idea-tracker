import "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import { afterEach, beforeEach, expect, vi } from "vitest";

expect.extend(matchers);

// Make console errors less verbose during tests
const originalConsoleError = console.error;
beforeEach(() => {
	console.error = vi.fn((...args) => {
		// Only log the error message, not the full stack trace
		if (args[0] && typeof args[0] === "string") {
			const errorMessage = args[0];
			const errorDetails = args[1];

			if (errorDetails instanceof Error) {
				console.log(`[Test Error] ${errorMessage}: ${errorDetails.message}`);
			} else {
				console.log(`[Test Error] ${errorMessage}: ${errorDetails}`);
			}
		}
	});
});

afterEach(() => {
	console.error = originalConsoleError;
});
