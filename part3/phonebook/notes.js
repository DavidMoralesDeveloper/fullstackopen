const { response, request, json } = require('express')
const express = require('express')
const corts = require('cors')
const app = express()


const morgan = require('morgan')
morgan.token('body', (request) => { return JSON.stringify(request.body) })

app.use(express.static('build'))
app.use(corts)
app.use(express.json())


let persons = [
  {
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
  },
  {
    "name": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": 2
  },
  {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": 3
  },
  {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 4
  }
]

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}
app.use(requestLogger)

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  let id = Number(request.params.id)
  let person = persons.find(person => person.id === id)
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.post('/api/persons', morgan(':method :url :status :res[content-length] - :response-time ms   :body'), (request, response) => {
  const person = request.body

  let ids = persons.map(person => person.id)
  let maxIds = Math.max(...ids)
  let newPerson = {
    "name": person.name,
    "number": person.number,
    "id": maxIds + 1
  }

  persons = persons.concat(newPerson)

  if (persons.name === person.name || !person.name) {
    return response.status(400).json({
      error: 'person.name is missing'
    })
  }

  response.status(201).json(newPerson)
})

app.get('/info', (request, response) => {
  let intfoTotalPersons = persons.length
  let data = () => new Date().toISOString()
  response.send(`
  <h1> Phonebook has info for  ${intfoTotalPersons}  people</h1>
  ${data()}
  `
  )
})

app.delete('/api/persons/:id', (request, response) => {
  let id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)


const PORT =  3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

