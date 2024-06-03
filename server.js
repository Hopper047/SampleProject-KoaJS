const koa = require("koa");
const app = new koa();

// add a date method to the content
app.context.date = Date();
app.context.useData = { firstName: "John", LastName: "Wick" };

app.use((ctx) => {
  // use the state
  ctx.state.user = "Hopper";
  //request object usage
  const from = ctx.request.origin;
  console.log("Origin: ", from);
  const method = ctx.request.method;
  console.log("Method: ", method);

  ctx.body = `Hello ${ctx.state.user} to KOA.js, today is ${ctx.date}`;

  //response object usage
  ctx.response.body = `This response is coming from ${from} Origin, with ${method} method`;
  if (ctx.useData && ctx.useData.firstName == "John")
    ctx.response.body = ctx.useData;
  else ctx.throw(404, "Data not found");

  /* 
    ctx.state: state similar to React, can send to FE
    ctx.cookies: manage cookies
    ctx.throw: throw an Exception 
    ctx.body: Print to browser

    Documentation: 
    https://Koajs.com/#context
    https://Koajs.com/#request
    https://Koajs.com/#response

    */
});

app.listen(3000); //http://localhost:3000/
