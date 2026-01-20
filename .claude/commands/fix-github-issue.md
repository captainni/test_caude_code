# GitHub问题修复命令

请分析并修复GitHub问题: $ARGUMENTS

按照这些步骤:
1. 获取问题详情理解问题中描述的问题
2. 搜索代码库中的相关文件
3. 实施必要的更改来修复问题
4. 编写并运行测试来验证修复
5. 确保代码通过代码检查和类型检查
6. 创建描述性的提交消息
记住对所有GitHub相关任务使用GitHub CLI (gh) 。

## 实施步骤

### 1. 获取问题详情
```bash
gh issue view $ARGUMENTS --json title,body,state,labels
```

### 2. 搜索代码库
搜索与问题相关的文件:
- 在问题标题和描述中查找关键词
- 检查相关的源文件
- 查看测试文件

### 3. 分析和修复
- 理解根本原因
- 实施修复方案
- 确保没有回归问题

### 4. 测试验证
- 运行现有测试
- 如需要，添加新测试
- 验证修复正常工作

### 5. 代码质量
- 运行代码检查
- 运行类型检查
- 遵循代码风格指南

### 6. 提交和推送
```bash
git add .
git commit -m "fix: 问题描述 (fixes #$ARGUMENTS)"
git push origin branch-name
gh pr create --title "问题标题" --body "Fixes #$ARGUMENTS"
```

## 使用示例
```
/fix-github-issue 123
```

这将分析和修复GitHub问题 #123。