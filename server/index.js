const express = require('express');
const cors = require('cors');
const router = require("./routes/Route")
const app = express();
const port = process.env.PORT || 4000;

app.use(cors({
    origin:"*",
    credentials:true
}));
app.use(express.json());
app.use("/api/v1",router)


app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
