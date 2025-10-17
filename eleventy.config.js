module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ dist: "assets" });
  eleventyConfig.addPassthroughCopy({ "src/static": "." });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "html", "md"]
  };
};
