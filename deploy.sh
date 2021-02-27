#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

if [ ! -n "$1" ]; then
	echo "请输入提交的关键词"
	exit 1
fi

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m $1

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:starComingup/myBlog.git master:gh-pages
#将所有内容同步到主干分支上git push git@github.com:starComingup/myBlog.git master:main
# https://github.com/starComingup/myBlog.git