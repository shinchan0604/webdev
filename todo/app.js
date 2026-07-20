import express from 'express';

const tasks = [
  {
    id: 1,
    title: "Learn Express",
    done: false
  },
  {
    id: 2,
    title: "Build Task API",
    done: true
  },
  {
    id: 3,
    title: "Test with curl",
    done: false
  }
];


const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.json({ "name": "Task API", "version": "1.0", "endpoints": ["/tasks"] });
})

app.get('/health', (req, res) => {
    res.json({ "status": "ok" });
})

app.get('/tasks', (req, res) => {
    res.json(tasks);
})

app.get('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find(task => task.id === id);
    if(!task){
        return res.status(404).json({
            error:`task ${id} not found`
            
        });
    }
    res.json(task);
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
})