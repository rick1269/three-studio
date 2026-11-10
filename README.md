# 为爱发电three工作室官网

独立静态网站，使用 HTML、CSS 和原生 JavaScript，无需安装依赖。

## 内容

工作室介绍、《海岛聚落：篝火纪事》游戏介绍、宣传插画、开发中实机画面和开发手记。配色为墨绿、青绿与米白。没有未经确认的下载链接或联系方式。

## 本地查看

在此目录运行 `python3 -m http.server 4173`，浏览器访问 http://localhost:4173 。也可直接打开 index.html。

## 发布 GitHub Pages

只把本目录发布到独立仓库 `three-studio`，不要上传父目录的游戏源码、配置或存档。

创建公开仓库后，将此目录文件推送到 main 分支；在仓库 Settings → Pages 中选择 Deploy from a branch、main、/(root)。

预期网址为 https://<GitHub用户名>.github.io/three-studio/ ，以 GitHub 实际返回地址为准。

## 更新内容

修改 index.html 更新介绍和手记，修改 style.css 调整外观。图片在 assets/。所有引用使用相对路径，兼容 GitHub Pages 项目网址。游戏实机与宣传插画已在页面标明。
