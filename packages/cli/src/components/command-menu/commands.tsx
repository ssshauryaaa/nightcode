import type { Command } from "./types";

export const COMMANDS: Command[] = [
  {
    name: "new",
    description: "Start a mew conversation",
    value: "/new",
  },
  {
    name: "upgrade",
    description: "Buy more credits",
    value: "/upgrade",
  },
  {
    name: "usage",
    description: "Open billing portal in your browser",
    value: "/usage",
  },
  {
    name: "login",
    description: "Login to your account",
    value: "/login",
  },
  {
    name: "logout",
    description: "Sign out of your account",
    value: "/logout",
  },
  {
    name: "theme",
    description: "Change the theme of the application",
    value: "/theme",
  },
  {
    name: "sessions",
    description: "Browser past sessions",
    value: "/sessions",
  },
  {
    name: "models",
    description: "View and select AI models",
    value: "/models",
  },
  {
    name: "agents",
    description: "View and manage agents",
    value: "/agents",
  },
  {
    name: "exit",
    description: "Quit the application",
    value: "/exit",
    action: (ctx) => {
      ctx.exit();
    },
  },
];
