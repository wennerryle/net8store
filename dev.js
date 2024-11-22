import concurrently from "concurrently";

concurrently([
  {
    command: "dotnet watch",
    name: "dotnet",
    prefixColor: "green",
    env: { DOTNET_WATCH_RESTART_ON_RUDE_EDIT: 1 },
  },
  {
    name: "esbuild",
    command: "node ./bundleprocess",
    prefixColor: "blue",
  },
]);
