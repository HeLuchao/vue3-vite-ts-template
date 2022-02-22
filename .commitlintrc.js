module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'style',
        'perf',
        'refactor',
        'revert',
        'test',
        'docs',
        'chore',
        'workflow',
        'ci',
        'types',
        'wip'
      ]
    ]
  }
};
