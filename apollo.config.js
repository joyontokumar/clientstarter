require("dotenv-load")();

module.exports = {
    client : {
        service: {
            name: "react-redux-sass-starterkit",
            url: process.env.NEXT_STATIC_API,
        },
        includes: ["**/*.tsx"],
        excludes: ["**/__tests__/**", "node_modules/*"]
    }
  };