@tailwind base;
@tailwind components;
@tailwind utilities;

/* Global styles for the Fatih Arridho personal site. We apply the neon
   terminal aesthetic by default, hide the native cursor in favour of a
   custom block cursor, and ensure smooth scrolling throughout the page. */

html,
body {
  @apply font-sans bg-background text-white scroll-smooth;
}

/* Custom block cursor using a data URI. This block mimics the classic
   terminal caret. The `cursor` declaration falls back to the default if
   unsupported. */
body {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='16'%3E%3Crect width='8' height='16' fill='%2300ff41'/%3E%3C/svg%3E") 4 14, auto;
}

/* Text selection styling matches the neon accent. */
::selection {
  @apply bg-neon text-background;
}

/* Terminal-like horizontal rules between sections. We use this utility
   class in the JSX to keep markup clean. */
.terminal-divider {
  @apply text-neon font-mono text-sm opacity-70 my-8 flex items-center;
}

/* Boot screen wrapper hides the rest of the page until the booting
   animation completes. */
.boot-screen {
  @apply fixed inset-0 flex items-center justify-center bg-background z-50;
  font-family: var(--font-mono);
}