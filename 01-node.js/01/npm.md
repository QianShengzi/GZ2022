npm install -g less
# -g --global 全局安装
# C:\Users\DONG\AppData\Roaming\npm\node_modules
# C:\Users\DONG\AppData\Roaming\npm  全局npm目录 lessc.cmd 暴露到全局环境变量


# -S --save 本地安装 项目依赖
# -D --savw-dev 本地安装 开发依赖

npm install express -g

npm install express -S


# 配置镜像源
用户根目录 .npmrc文件 
registry=https://registry.npm.taobao.org


# 使用淘宝cnpm替代npm的命令：

npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install -g less

# 查看安装信息
npm list -g

# 查看某个包 版本信息
npm list express


# 初始化包=> 生成包描述文件 package.json
npm init


npm uninstall express -g -S

npm update express

# 如果npm安装 反复出错
npm cache clean
npm install


# https://github.com/FindIndex/GZ2022