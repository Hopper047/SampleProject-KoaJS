const koa=require('koa')
const app=new koa()

app.use(ele => {
    ele.body = "Hello to KOA.js"
})

app.listen(3000) //http://localhost:3000/
