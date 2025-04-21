// .eslintrc.js
module.exports = {
    root: true,
    extends: ["next", "next/core-web-vitals"],
    rules: {
      "react/react-in-jsx-scope": "off", // React 17+ doesn't need this
    },
  };
  