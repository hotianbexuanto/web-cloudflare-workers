/**
 * 欢迎使用 Cloudflare Workers！这是您的第一个 worker。
 *
 * - 在终端中运行 `npm run dev` 启动开发服务器
 * - 在浏览器中打开 http://localhost:8787/ 查看 worker 的运行情况
 * - 运行 `npm run deploy` 发布您的 worker
 *
 * 了解更多：https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // 处理不同路由
    if (url.pathname === '/') {
      return new Response('你好，世界！这是一个 Cloudflare Worker 模板。', {
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
        },
      });
    }
    
    if (url.pathname === '/json') {
      return new Response(JSON.stringify({ message: '你好，世界！', environment: env.ENVIRONMENT }), {
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
      });
    }
    
    // 其他路由的默认响应
    return new Response('未找到', {
      status: 404,
      headers: {
        'content-type': 'text/plain;charset=UTF-8',
      },
    });
  },
};