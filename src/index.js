/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Handle different routes
    if (url.pathname === '/') {
      return new Response('Hello, World! This is a Cloudflare Worker template.', {
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
        },
      });
    }
    
    if (url.pathname === '/json') {
      return new Response(JSON.stringify({ message: 'Hello, World!', environment: env.ENVIRONMENT }), {
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
      });
    }
    
    // Default response for other routes
    return new Response('Not Found', {
      status: 404,
      headers: {
        'content-type': 'text/plain;charset=UTF-8',
      },
    });
  },
};