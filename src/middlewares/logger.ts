// path: src/middlewares/logger.ts

import type { Context, Next } from 'koa';

export default () => {
  return async (ctx: Context, next: Next) => {
    const start = Date.now();
    await next();
    const duration = Date.now() - start;

    try {
      const statusMessage = {
        200: 'OK',
        404: 'Not Found',
        500: 'Internal Server Error',
        // เพิ่มตามต้องการ
      }[ctx.response.status] || '';

      // บันทึก log ลงใน database
      await strapi.entityService.create('api::log.log', {
        data: {
          endpoint: ctx.request.url,
          method: ctx.request.method,
          statusCode: ctx.response.status,
          message: `${statusMessage} (${duration} ms)`,
        },
      });
    } catch (err) {
      strapi.log.error('Failed to write log:', err);
    }
  };
};
