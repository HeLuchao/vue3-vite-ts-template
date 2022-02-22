module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: [
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
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: [],
  types: {
    feat: {
      description: '增加新功能',
      emoji: '🎸',
      value: 'feat'
    },
    fix: {
      description: '修复问题/BUG',
      emoji: '🐛',
      value: 'fix'
    },
    style: {
      description: '代码风格相关无影响运行结果的',
      emoji: '💄',
      value: 'style'
    },
    perf: {
      description: '优化/性能提升',
      emoji: '⚡️',
      value: 'perf'
    },
    refactor: {
      description: '重构',
      emoji: '💡',
      value: 'refactor'
    },
    revert: {
      description: '撤销修改',
      emoji: '⏪',
      value: 'revert'
    },
    test: {
      description: '测试相关',
      emoji: '💍',
      value: 'test'
    },
    docs: {
      description: '文档/注释',
      emoji: '✏️',
      value: 'docs'
    },
    chore: {
      description: '依赖更新/脚手架配置修改等',
      emoji: '🤖',
      value: 'chore'
    },
    workflow: {
      description: '工作流改进',
      emoji: '🎉',
      value: 'workflow'
    },
    ci: {
      description: '持续集成',
      emoji: '🎡',
      value: 'ci'
    },
    types: {
      description: '类型定义文件更改',
      emoji: '🏹',
      value: 'types'
    },
    wip: {
      description: '开发中',
      emoji: '👷',
      value: 'wip'
    }
  }
};
