const { remarkCodeHike } = require("@code-hike/mdx");
const theme = require("shiki/themes/monokai.json");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkCodeHike, { theme }]],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
