# Web Cloudflare Workers

这是一个基于 Cloudflare Workers 的模板项目，用于快速构建和部署无服务器应用。

## 项目结构

```
├── src/
│   └── index.js        # Worker 入口文件
├── wrangler.toml       # Wrangler 配置文件
├── package.json        # 项目配置和依赖
├── RELEASE.md          # 发布说明
└── .github/workflows/
    └── build-and-release.yml  # GitHub Actions 构建和发布流程
```

## 开发指南

### 本地开发

1. 安装依赖：
   ```bash
   npm install
   ```

2. 启动开发服务器：
   ```bash
   npm run dev
   ```

### 构建项目

```bash
npm run build
```

构建后的文件将输出到 `dist/` 目录。

## 配置

### Wrangler 配置

`wrangler.toml` 文件包含 Worker 的配置信息：
- `name`: Worker 名称
- `main`: 入口文件路径
- `compatibility_date`: 兼容性日期

### 环境变量

可以在 `wrangler.toml` 中配置环境变量：
```toml
[vars]
# 环境变量
ENVIRONMENT = "development"

[env.production]
vars = { ENVIRONMENT = "production" }
```

## 部署

### 使用 Wrangler CLI 部署

1. 安装 Wrangler：
   ```bash
   npm install -g wrangler
   ```

2. 登录 Cloudflare：
   ```bash
   wrangler login
   ```

3. 部署 Worker：
   ```bash
   npm run deploy
   ```

## GitHub Actions

项目包含一个 GitHub Actions 工作流，用于自动化构建和创建 Release：
- 在推送到 `main` 分支时触发
- 自动构建项目
- 创建 GitHub Release

## 许可证

MIT