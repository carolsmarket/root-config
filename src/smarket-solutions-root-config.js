import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@smarket-solutions/home",
  app: () => System.import("@smarket-solutions/home"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});