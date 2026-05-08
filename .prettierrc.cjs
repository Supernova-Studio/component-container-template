const config = {
  semi: false,
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss", // Must be loaded last https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
  ],
  trailingComma: "es5",
  importOrder: [
    // react and next related packages come first.
    "^(react)(?!.*.css)",
    "^(next)(?!.*.css)",
    // Supernova packages, put /dm first
    "^(@supernovaio/dm)(?!.*.css)",
    "^(@supernovaio)(?!.*.css)(/.*|$)",
    // any other @ packages
    "^@(?!.*.css).*$",
    // Internal packages. This was a preset default. Might not be relevant for us.
    "^(@|components)(/.*|$)",
    // Parent imports. Put `..` last.
    "^\\.\\.(?!/?$)",
    "^\\.\\./?$",
    // Other relative imports. Put same-folder imports and `.` last.
    "^\\./(?=.*/)(?!/?$)",
    "^\\.(?!/?$)",
    "^\\./?$",
    // Style imports.
    "<THIRD_PARTY_MODULES>",
    "^.+/.*.?(css)$",
  ],
  importOrderSeparation: true,
}

module.exports = config
