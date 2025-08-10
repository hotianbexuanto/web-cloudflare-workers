# 发布说明

## v1.0.0

Cloudflare Worker 模板的初始版本。

### 功能特性

- 基础的 Cloudflare Worker 模板
- 用于测试的示例路由
- 用于自动化构建和发布的 GitHub Actions 工作流
- 环境特定的配置

### 使用方法

1. 克隆仓库
2. 使用 `npm install` 安装依赖
3. 配置您的 Cloudflare 凭据
4. 使用 `npm run deploy` 部署

### 配置说明

- 在 `wrangler.toml` 中更新您的 Cloudflare 账户详情
- 修改 `src/index.js` 来实现您的 worker 逻辑