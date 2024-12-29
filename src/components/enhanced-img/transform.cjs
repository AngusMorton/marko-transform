const t = require("@marko/compiler").types;

module.exports = (tag) => {
  tag.replaceWith(t.markoTag(t.stringLiteral("img"), [], t.markoTagBody()));
};
