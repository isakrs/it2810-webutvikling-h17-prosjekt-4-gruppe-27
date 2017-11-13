import * as express from "express";

let port = process.env.PORT || 3000;
const app = express()


app.get("/", (req, res) => {
    res.sendStatus(200).send()
})

app.listen(port,()=>{
    console.log("server running on port: ",port)
})

// comment