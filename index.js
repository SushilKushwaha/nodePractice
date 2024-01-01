const express = require('express')
const app = express()
const port = 5000

const users =[
    {id:323,name:'ram', address:'ktm'},
    {id:511,name:'kaylin', address:'gorkha'},
    {id:56,name:'bishwo', address:'gorkha'},
    {id:456,name:'gopal', address:'ktm'}
]

app.get('/users/:id', (req, res, id) => {
  const userId = parseInt(req.params.id); 

  const user = users.find((item) => item.id === userId);

  if (user) {
      res.send(user);
  } else {
      res.status(404).send('User not found');
  }
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})