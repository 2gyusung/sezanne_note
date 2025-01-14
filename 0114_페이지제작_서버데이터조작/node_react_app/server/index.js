const express = require('express')
const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

let id = 3;
const todoList = [
  { id : 1,
    context : '할 일',
    isDone : false
},  { id : 2,
  context : '할 일 2',
  isDone : false
}
]


app.get('/', (req, res)=> {
  res.send(
    /*html */`
    <h1>Hello Node.js</h1>
    `)
})

app.get('/api/todo', (req ,res)=> {

  res.json(todoList)
})

app.post('/api/todo', (req, res)=> {
  const {context, isDone} = req.body; //중간 다리[요청 시 꼭 필요하다]
  console.log(req.body);
  todoList.push(
    {id : id++, context, isDone}
  );

  return res.send('success request data!!');
})

app.listen(4000, ()=> {
  console.log('server Start!!', 'http://localhost:4000');
  
})