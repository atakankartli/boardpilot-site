// The one place for the base path. GitHub Pages serves this site at /boardpilot-site.
// With an own domain, build with NEXT_PUBLIC_BASE_PATH="" (see README.md).
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/boardpilot-site";
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://atakankartli.github.io";

/** Path to a file in public/ or to a page, with the base path in front. */
export const asset = (path: string) => `${BASE_PATH}${path}`;

export const BETA_MAIL = "mailto:aliatakankartli@gmail.com?subject=Board%20Pilot%20beta";
export const CONTACT = "aliatakankartli@gmail.com";
