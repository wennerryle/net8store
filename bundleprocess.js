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
  try {
    await esbuild.build({
      entryPoints: ["./websrc/index.ts"],
      bundle: true,
      minify: true,
      sourcemap: "inline",
      outfile: "./wwwroot/js/bundle.js",
      legalComments: "none"
    });
  } catch(/** @type {esbuild.BuildFailure} */ error) {
    // esbuild write error into console
    console.log("waiting until you fix the error")
    return;
  }

  console.log("successfully builded!")
}

