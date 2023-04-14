// module.exports = {
//   roots: ["<rootDir>/tests"],
//   transform: {
//     "^.+\\.tsx?$": "ts-jest",
//   },
//   testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
//   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
// };
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  roots:['<rootDir>/tests'],
  preset: 'ts-jest',
  testEnvironment: 'node',
};