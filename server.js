const koa=require('koa')
const app=new koa()

// add a date method to the content
app.context.date = Date()

app.use(ctx => {
    // use the state
    ctx.state.user = "Hopper"

    ctx.body = `Hello ${ctx.state.user} to KOA.js, today is ${ctx.date}`

    /* 
    ctx.state: state similar to React, can send to FE
    ctx.cookies: manage cookies
    ctx.throw: throw an Exception 
    ctx.body: Print to browser

    Documentation: https://Koajs.com/#context

    */
})

app.listen(3000) //http://localhost:3000/
