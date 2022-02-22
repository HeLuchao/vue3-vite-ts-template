module.exports = {
  header: '# 更新历史 \n\n',
  types: [
    { type: 'feat', section: '✨ Features | 增加新功能' },
    { type: 'fix', section: '🐛 Bug Fixes | Bug 修复' },
    { type: 'style', section: '💄 Styles | 风格' },
    { type: 'perf', section: '⚡ Performance Improvements | 性能优化' },
    { type: 'refactor', section: '♻️ Code Refactoring | 代码重构' },
    { type: 'revert', section: '⏪ Revert | 回退' },
    { type: 'test', section: '✅ Tests | 测试' },
    { type: 'docs', section: '✏️ Documentation | 文档' },
    { type: 'chore', section: '🚀 Chore | 构建/工程依赖/工具' },
    { type: 'workflow', section: '🎉Workflow | 工作流改进' },
    { type: 'ci', section: '🎡 Continuous Integration | CI 配置' },
    { type: 'types', section: '🏹‍ Types | 类型定义文件更改' },
    { type: 'wip', section: '👷‍ Wip | 开发中' }
  ]
};
