// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        contact: resolve(__dirname, "src/contact.html"),
        detlevenderum: resolve(__dirname, "src/detlevenderum.html"),
        events: resolve(__dirname, "src/events.html"),
        frivillige: resolve(__dirname, "src/frivillige.html"),
        frygten: resolve(__dirname, "src/frygten.html"),
        gogo: resolve(__dirname, "src/gogoyo-yoku.html"),
        mlsmhr: resolve(__dirname, "src/mlsmhr.html"),
        om: resolve(__dirname, "src/om-vildskud.html"),
        opencall: resolve(__dirname, "src/opencall.html"),
        privat: resolve(__dirname, "src/privat.html"),
        program: resolve(__dirname, "src/program.html"),
        rebirth: resolve(__dirname, "src/re-birth.html"),
        teamet: resolve(__dirname, "src/teamet.html"),
        vaermed: resolve(__dirname, "src/vaermed.html"),
        venuer: resolve(__dirname, "src/venuer.html"),
        vildmedmig: resolve(__dirname, "src/vildmedmig.html"),
        wftwt: resolve(__dirname, "src/wftwt.html"),
        billetter: resolve(__dirname, "src/billetter.html"),

        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
