import * as esbuild from "esbuild";
import chokidar from "chokidar";

console.log("esbuild watch enabled");

console.log("building for the first time..")
rebuild();

chokidar.watch("./websrc").on("change", () => {
  console.log("files changes.. building...")

  rebuild()
});

async function rebuild() {
  await esbuild.build({
    entryPoints: ["./websrc/index.ts"],
    bundle: true,
    minify: true,
    sourcemap: "inline",
    outfile: "./wwwroot/js/bundle.js",
    legalComments: "none"
  });

  console.log("successfully builded!")
}

