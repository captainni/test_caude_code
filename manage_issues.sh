#!/bin/bash

# Issues管理脚本 - 配合Claude Code使用

echo "=== GitHub Issues管理工具 ==="

# 显示所有open的issues
echo "1. 显示所有开放的issues:"
./gh_2.40.1_linux_amd64/bin/gh issue list --state open

echo -e "\n2. 按标签分类issues:"
echo "Bug修复:"
./gh_2.40.1_linux_amd64/bin/gh issue list --state open --label "bug"

echo -e "\n功能请求:"
./gh_2.40.1_linux_amd64/bin/gh issue list --state open --label "enhancement"

echo -e "\n3. 按优先级排序:"
./gh_2.40.1_linux_amd64/bin/gh issue list --state open --sort "priority"

echo -e "\n4. 最近更新的issues:"
./gh_2.40.1_linux_amd64/bin/gh issue list --state open --sort "updated-desc"

echo -e "\n使用Claude Code管理issues的示例命令:"
echo "- '整理所有open的issues'"
echo "- '按优先级分类issues'"
echo "- '创建新的issue'"
echo "- '关闭已解决的issues'"