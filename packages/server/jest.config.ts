export default {
  'clearMocks': true,
  'collectCoverage': true,
  'coverageProvider': 'v8',
  'rootDir': 'src',
  'testRegex': '.*\\.test\\.ts$',
   'preset': 'ts-jest/presets/default-esm',
  'transform': {
    '^.+\\.(t|j)s$': ['ts-jest', { useESM: true }],
  },
  'collectCoverageFrom': [
    '**/*.(t|j)s',
  ],
  'coverageDirectory': '../coverage',
  'testEnvironment': 'node',
  'moduleFileExtensions': [
    'js',
    'json',
    'ts',
  ],
  'testTimeout': 30000,
  "coveragePathIgnorePatterns": [
    "src/index.ts",
  ],
};
