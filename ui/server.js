const express = require('express');

const app = express();

app.use(express.static(__dirname + '/client/build/'));
app.get('/', (req,res) => {
    console.log("Sending react app...")
    res.sendFile(__dirname + '/client/build/index.html')
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Application is listening on port...${PORT}`)
});