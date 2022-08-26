import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { router } from './router/router.ts'
const app = new Application();

app.use(router.routes())
app.use(({ response }) => {
  response.body = "Hello World!!!!";
});

console.log('ばか')
await app.listen({ port: 8000 });
