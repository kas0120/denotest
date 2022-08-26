import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const router = new Router()

router.get('/', (ctx) => {
  ctx.response.body = `<!DOCTYPE html>
    <html>
      <head><title>Hello oak!</title><head>
      <body>
        <h1>Hello oak!</h1>
      </body>
    </html>
  `;
});

router.get('/hoge', ({ response: res }) => {
  res.body = `<!DOCTYPE html>
    <html>
      <head><title>ほげほげ</title><head>
      <body>
        <h1>ほげほげ</h1>
      </body>
    </html>
  `;
});


export { router }
