const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const taskRoutes = require('./routes/taskRoute');


const app = express()
const port = 3001

app.use(bodyParser.json()) //enable body parse

//connect to MongoDB
// mongoose.connect('mongodb://Localhost:27017/microTaskDB').then(()=>{
//     console.log('Connected to MongoDB')
// })
// .catch(err=>{
//     console.error('Could not connect to MongoDB', err)
// });


mongoose.connect('mongodb://mongo:27017/microTaskDB').then(()=>{
    console.log('Connected to MongoDB')
})
.catch(err=>{
    console.error('Could not connect to MongoDB', err)
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/microservice/task', taskRoutes);

app.listen(port, () => {
  console.log(`Task Service listening on port ${port}`)
})
