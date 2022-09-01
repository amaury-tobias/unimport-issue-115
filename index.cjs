const { createUnimport } = require("unimport");

const ctx = createUnimport({
  presets: ["@vueuse/core"],
});
console.log(ctx.generateTypeDeclarations());
