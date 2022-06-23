require('dotenv').config()
const express = require('express');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});