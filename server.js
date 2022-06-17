import express from "express"
const app = express()

//postgres connection

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port}`))