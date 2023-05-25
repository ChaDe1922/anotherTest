// /** @type {import('jest').Config} */

const 

config = {
  verbose: true,
};

// module.exports = config;

module.exports = {
  moduleNameMapper: {
    '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
}
