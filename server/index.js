var express = require("express");
var bodyParser=require("body-parser")
var mongoose = require("mongoose")
var cors = require("cors")

const app = express();

var postRoutes = require("./routes/posts");

app.use("/posts", postRoutes)


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

const CONNECTION_URL="mongodb+srv://javascriptmastery:javascriptmastery123@cluster0.jgd3a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);