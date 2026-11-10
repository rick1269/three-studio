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

## 已发布

官网：https://rick1269.github.io/three-studio/

仓库：https://github.com/rick1269/three-studio

官网在独立 GitHub 仓库中维护，与 Maker 游戏仓库分开。

## 页面结构

- `index.html`：工作室介绍与游戏作品列表。
- `games/campfire/index.html`：《海岛聚落：篝火纪事》独立介绍页。
- 后续游戏可在 `games/` 下新增目录，再为首页作品区添加入口。

## 首页展示方式

首页采用一屏式布局：工作室介绍占主内容约三分之二，游戏横向滑窗占约三分之一。仅有一款游戏时导航箭头禁用。新增游戏时复制 `.shelf-game` 卡片并更新链接、图片、简介，计数与导航自动适配；支持触摸滑动、滚动条、箭头按钮和键盘方向键。极小屏幕允许纵向滚动保证可读性。
