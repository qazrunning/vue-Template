#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# 部署到 /usr/local/var/www/md-core-template

# cp -r dist/* /usr/local/var/www/md-core-template

cd -
