require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
morgan.token('body', (request) => { return JSON.stringify(request.body) })
const cors = require('cors')
const Person = require('./models/persons')


const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('build'))


app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => {
      console.log(error)
      response.status(400).send({ error: 'malformatted id' })
    })
})

app.post('/api/persons', morgan(':method :url :status :res[content-length] - :response-time ms   :body'), (request, response , next) => {

  const body = request.body

  if (!body.name) {
    return response.status(400).json({ error: 'name missing' })
  }

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save().then(savePerson => {
    response.json(savePerson)
  }).catch(error =>  next(error, console.log(error.response,error)))
})




app.get('/info', (request, response) => {
  Person.find({}).then(persons => {
    let intfoTotalPersons = persons.length
    let data = () => new Date().toISOString()
    response.send(`
  <h1> Phonebook has info for  ${intfoTotalPersons}  people</h1>
  ${data()}
  `
    )
  })
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  const { id } = request.params
  Person.findByIdAndRemove(id)
    .then(result => {
      response.status(204).end()
    }).catch(err => next(err))

  response.status(204).end()
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})