//server/index.js

const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.listen( PORT, ()=>{
    console.log(`Server listening on ${PORT}`);
});

// Have Node serve the files for our build React App
app.use(express.static(path.resolve(__dirname, '../client/build')));

//Handle GET requests to /api route
app.get('/api', (req,res)=>{
    res.json({message : 'Hello from the server!'})
});

// All oher GET requests not handled before will return our React app
app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});