import * as esbuild from "esbuild";
import chokidar from "chokidar";

console.log("esbuild watch enabled");

chokidar.watch("./websrc").on("change", async () => {
  console.log("files changes.. rebuilding...")

  await esbuild.build({
    entryPoints: ["./websrc/index.ts"],
    bundle: true,
    minify: true,
    sourcemap: false,
    outfile: "./wwwroot/js/bundle.js",
    legalComments: "none"
  });

  console.log("successfully rebuilded!")
});
