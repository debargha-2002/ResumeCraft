const express = require('express');
const cors = require('cors');
const router = require("./routes/Route")
const app = express();
const port = process.env.PORT || 4000;

app.use(cors({
    origin: "https://resume-craft-snowy.vercel.app",  // Only allow requests from this origin
    credentials: true
}));
app.use(express.json());
app.use("/api/v1",router)


app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});

app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Server running successfully",
	});
});
