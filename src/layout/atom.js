// @flow
// Oceanic Next
// Author: Dmitri Voronianski (https://github.com/voronianski)
// https://github.com/voronianski/oceanic-next-color-scheme
// Adapted from: https://github.com/reactjs/reactjs.org/blob/428d52b/src/prism-styles.js

/*:: import type { PrismTheme } from '../src/types' */

var colors = {
  char: "#D8DEE9",
  comment: "#999999",
  keyword: "#e391fd",
  primitive: "#61aeee",
  string: "#98c379",
  variable: "#d7deea",
  boolean: "#ff8b50",
  punctuation: "#5FB3B3",
  tag: "#fc929e",
  function: "#79b6f2",
  className: "#FAC863",
  method: "#6699CC",
  operator: "#fc929e",
}

var theme /*: PrismTheme */ = {
  plain: {
    backgroundColor: "#3e404c",
    color: "#ffffff",
  },
  styles: [
    {
      types: ["attr-name"],
      style: {
        color: colors.keyword,
      },
    },
    {
      types: ["attr-value"],
      style: {
        color: colors.string,
      },
    },
    {
      types: ["comment", "block-comment", "prolog", "doctype", "cdata"],
      style: {
        color: colors.comment,
      },
    },
    {
      types: [
        "property",
        "number",
        "function-name",
        "constant",
        "symbol",
        "deleted",
      ],
      style: {
        color: colors.primitive,
      },
    },
    {
      types: ["boolean"],
      style: {
        color: colors.boolean,
      },
    },
    {
      types: ["tag"],
      style: {
        color: colors.tag,
      },
    },
    {
      types: ["string"],
      style: {
        color: colors.string,
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: colors.string,
      },
    },
    {
      types: ["selector", "char", "builtin", "inserted"],
      style: {
        color: colors.char,
      },
    },
    {
      types: ["function"],
      style: {
        color: colors.function,
      },
    },
    {
      types: ["operator", "entity", "url", "variable"],
      style: {
        color: colors.variable,
      },
    },
    {
      types: ["keyword"],
      style: {
        color: colors.keyword,
      },
    },
    {
      types: ["at-rule", "class-name"],
      style: {
        color: colors.className,
      },
    },
    {
      types: ["important"],
      style: {
        fontWeight: "400",
      },
    },
    {
      types: ["bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
  ],
}

module.exports = theme
