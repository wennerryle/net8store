import * as esbuild from "esbuild";
import chokidar from "chokidar";

console.log("esbuild watch enabled");

chokidar.watch("./js").on("change", async () => {
  console.log("files changes.. rebuilding...")

  await esbuild.build({
    entryPoints: ["./js/index.ts"],
    bundle: true,
    minify: true,
    sourcemap: false,
    outfile: "./wwwroot/js/bundle.js",
    legalComments: "none"
  });

  console.log("successfully rebuilded!")
});
