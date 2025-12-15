
//npm 
// const express = require('express')

import express from 'express'
import bodyParser from 'body-parser'
const app = express()
const port = 3001


app.use(bodyParser.urlencoded({ extended: true }))
//get a random joke

app.get("/random", (req, res) => {
    const random = Math.floor(Math.random() * programmingJokes.length)
    res.json(programmingJokes[random])

})

//filter joke by type

app.get("/filter", (req, res) => { //query joke type Backend
    const type = req.query.jokeType //backend
    const jokeFound = programmingJokes.filter(joke => joke.jokeType === type) //backend === backend
    res.json(jokeFound)

})
//get joke by id

app.get("/jokes/:id", (req, res) => {
    const id = parseInt(req.params.id)//backend
    const jokeFound = programmingJokes.find(joke => joke.id === id)//backend === backend
    res.json(jokeFound)

})
console.log("sundayclass")

//get all jokes

app.get("/jokes", (req, res) => {
    res.json(programmingJokes)
})



//create a joke

app.post("/jokes", (req, res) => {
    // res.json(programmingJokes)

    const newJoke = {
        id: programmingJokes.length + 1,
        jokeText: req.body.jokeText,
        jokeType: req.body.jokeType
    }
    programmingJokes.push(newJoke)
    console.log(programmingJokes)
    res.json(newJoke)
})

//put update

app.put('/jokes/:id', (req, res) => { //1
    const id = parseInt(req.params.id)
    //     {
    //     "id":"id",
    //     "jokeText":"sandipsan le 20 crore magnu vayesi ma vagey",
    //     "jokeType":"Paisa matters"
    // }

    const updatedJoke = {
        id: id,  //1=="1" true
        jokeText: req.body.jokeText,
        jokeType: req.body.jokeType

    }
    const indexFound = programmingJokes.findIndex(
        joke => joke.id === id
    ) //0

    // let indexFound = -1
    // for (let i = 0; i < programmingJokes.length; i++) {
    //     if (programmingJokes[i].id === id) {
    //         //programmingjokes[i] =programmingjokes[0] = {
    //         //     id: 1,
    //         //     jokeText: 'Why was the JavaScript developer sad? Because he didn\'t Node how to Express himself.',
    //         //     jokeType: 'Backend'
    //         // }
    //         indexFound = i
    //         break

    //     }
    // }

    // programmingJokes.forEach((joke, i) => {
    //     if (joke.id === id) {
    //         indexFound = i
    //     }
    // })



    //programmingjokes[0] =//     {
    //     "id":1,
    //     "jokeText":"sandipsan le 20 crore magnu vayesi ma vagey",
    //     "jokeType":"Paisa matters"
    // }
    programmingJokes[indexFound] = updatedJoke
    console.log(programmingJokes)

    res.json(updatedJoke)


    // {
    //     id: 1,
    //     jokeText: 'Why was the JavaScript developer sad? Because he didn\'t Node how to Express himself.',
    //     jokeType: 'Backend'
    // },
    //     "id":1,
    //     "jokeText":"sandipsan le 20 crore magnu vayesi ma vagey",
    //     "jokeType":"Paisa matters"
    // }
})


app.patch('/jokes/:id', (req, res) => {
    console.log(req.path)
    const id = parseInt(req.params.id)
    const vakojoke = programmingJokes.find(joke => joke.id === id)
    const updatedJoke = {
        id: id,  //1=="1" true
        jokeText: req.body.jokeText || vakojoke.jokeText, //or or if else
        jokeType: req.body.jokeType || vakojoke.jokeType

    }
    const indexFound = programmingJokes.findIndex(
        joke => joke.id === id
    )
    programmingJokes[indexFound] = updatedJoke
    res.json(updatedJoke)
    console.log(programmingJokes)
})



// //if(req.body.jokeText =='' && req.body.jokeText ===null){
// vakojoke.jokeText
// }
//delete by id
app.delete('/jokes/:id', (req, res) => {  //1
    //params linxu id lai int change garxu
    const id = parseInt(req.params.id)
    const jokeIndex = programmingJokes.findIndex(joke => joke.id === id) //0
    if (jokeIndex > -1) {
        programmingJokes.splice(jokeIndex, 1)
        console.log(programmingJokes)
        res.json({
            message: `${id} is deleted successfully`
        })
    }
    else {
        res.status(400)
            .json({ message: `${id} not found` })

    }

})

const apiKey = 'hellos'

//delete all 
app.delete('/all', (req, res) => {  //1
    const key = req.query.key
    console.log(key)
    if (key === apiKey) {
        // console.log(key)
        programmingJokes = []
        res.status(200)
            .json({
                message: res.statusMessage
            })
    } else {
        res.status(403).json({
            message: 'not authorized'
        })
    }




})



// app.listen(port, () => {
//     console.log(`Example app listening on port http://localhost:${port}`)
// })

/**
 * An array of 50 programming jokes focused on double meanings and puns.
 * Each joke has an id, jokeText, and jokeType.
 * Types include 'General', 'Frontend', 'Backend', 'Database', 'DevOps', 'Python', and 'Java'.
 */
let programmingJokes = [
    {
        id: 1,
        jokeText: 'Why was the JavaScript developer sad? Because he didn\'t Node how to Express himself.',
        jokeType: 'Backend'
    },
    {
        id: 2,
        jokeText: 'There are 10 types of people in the world: those who understand binary, and those who don\'t.',
        jokeType: 'General'
    },
    {
        id: 3,
        jokeText: 'What is a programmer\'s favorite place to hang out? Foo Bar.',
        jokeType: 'General'
    },
    {
        id: 4,
        jokeText: 'Why did the developer quit his job? He didn\'t get arrays.',
        jokeType: 'General'
    },
    {
        id: 5,
        jokeText: 'A SQL query walks into a bar, walks up to two tables and asks, "Can I join you?"',
        jokeType: 'Database'
    },
    {
        id: 6,
        jokeText: 'Why did the CSS developer break up with his girlfriend? She was using absolute positioning.',
        jokeType: 'Frontend'
    },
    {
        id: 7,
        jokeText: 'Why do Java developers wear glasses? Because they don\'t C#.',
        jokeType: 'Java'
    },
    {
        id: 8,
        jokeText: 'What is a coder\'s favorite sport? Base-ball.',
        jokeType: 'General'
    },
    {
        id: 9,
        jokeText: 'What do you call a pirate who programs? A soft-arrrr!',
        jokeType: 'General'
    },
    {
        id: 10,
        jokeText: 'What’s a React component\'s favorite place to be? Hooked on a feeling.',
        jokeType: 'Frontend'
    },
    {
        id: 11,
        jokeText: 'Why did the Python programmer get mad? Because he couldn\'t find a snake_case.',
        jokeType: 'Python'
    },
    {
        id: 12,
        jokeText: 'Why was the database developer arrested? For unauthorized access to the root directory.',
        jokeType: 'Database'
    },
    {
        id: 13,
        jokeText: 'Why did the two functions stop calling each other? They had too much Argument.',
        jokeType: 'General'
    },
    {
        id: 14,
        jokeText: 'What does "git commit" mean? It means "I promise I won\'t change this again."',
        jokeType: 'DevOps'
    },
    {
        id: 15,
        jokeText: 'Why did the programmer take a break? He was suffering from a Stack Overflow.',
        jokeType: 'General'
    },
    {
        id: 16,
        jokeText: 'What do you call a magical boat? Dock-er, the container.',
        jokeType: 'DevOps'
    },
    {
        id: 17,
        jokeText: 'What did the variable say to the function? "You need to scope out the competition."',
        jokeType: 'General'
    },
    {
        id: 18,
        jokeText: 'Why was the HTML file shivering? It had cold markup.',
        jokeType: 'Frontend'
    },
    {
        id: 19,
        jokeText: 'What did one API say to the other? "Are we going out, or are we just RESTing?"',
        jokeType: 'Backend'
    },
    {
        id: 20,
        jokeText: 'What do you call a lazy programmer? A functional programmer.',
        jokeType: 'General'
    },
    {
        id: 21,
        jokeText: 'Why did the developer go broke? He used up all his cache.',
        jokeType: 'General'
    },
    {
        id: 22,
        jokeText: 'What\'s the object-oriented way to become wealthy? Inheritance.',
        jokeType: 'General'
    },
    {
        id: 23,
        jokeText: 'Why don\'t programmers like the outdoors? Because it has too many fields.',
        jokeType: 'General'
    },
    {
        id: 24,
        jokeText: 'Why did the Python programmer get fired? He had no indentation of what he was doing.',
        jokeType: 'Python'
    },
    {
        id: 25,
        jokeText: 'What is a MongoDB developer\'s favorite quote? "No Schema, No Problem!"',
        jokeType: 'Database'
    },
    {
        id: 26,
        jokeText: 'What did the array say to the linked list? "You look a bit disjointed."',
        jokeType: 'General'
    },
    {
        id: 27,
        jokeText: 'What do you call a successful deployment? A Kubernetes.',
        jokeType: 'DevOps'
    },
    {
        id: 28,
        jokeText: 'Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.',
        jokeType: 'General'
    },
    {
        id: 29,
        jokeText: 'Why did the developer go to therapy? To resolve his dependencies.',
        jokeType: 'General'
    },
    {
        id: 30,
        jokeText: 'What is a front-end developer\'s favorite cocktail? A Mojito, heavy on the Z-Index.',
        jokeType: 'Frontend'
    },
    {
        id: 31,
        jokeText: 'Why did the network engineer break up with his girlfriend? He didn\'t like her sub-netting.',
        jokeType: 'DevOps'
    },
    {
        id: 32,
        jokeText: 'What is an array\'s favorite type of music? A rap album called "Index."',
        jokeType: 'General'
    },
    {
        id: 33,
        jokeText: 'What is a programmer\'s least favorite kind of tea? SQL Tea (Sequel-Tea).',
        jokeType: 'Database'
    },
    {
        id: 34,
        jokeText: 'What\'s a front-end developer\'s favorite hobby? Knitting, because they love using DOMs (dots over meshes).',
        jokeType: 'Frontend'
    },
    {
        id: 35,
        jokeText: 'Why was the software developer constantly getting into trouble? He always used too many arguments.',
        jokeType: 'General'
    },
    {
        id: 36,
        jokeText: 'Why are Python engineers so good at making soup? They use `import requests` to get ingredients.',
        jokeType: 'Python'

    },
    {
        id: 37,
        jokeText: 'What’s a programmer\'s favorite food? Recursion cake.',
        jokeType: 'General'
    },
    {
        id: 38,
        jokeText: 'Why are Python programmers so calm? They prefer to just `pass`.',
        jokeType: 'Python'
    },
    {
        id: 39,
        jokeText: 'What is a database administrator\'s favorite tool? The key (Primary Key).',
        jokeType: 'Database'
    },
    {
        id: 40,
        jokeText: 'What did the HTTP say to the URL? "I think we REST well together."',
        jokeType: 'Backend'
    },
    {
        id: 41,
        jokeText: 'What is a developer\'s favorite vegetable? A kale (scale) for the database.',
        jokeType: 'Database'
    },
    {
        id: 42,
        jokeText: 'Why do front-end developers love the beach? Because of all the CSS (Cascading Style Sheets).',
        jokeType: 'Frontend'
    },
    {
        id: 43,
        jokeText: 'What is a developer\'s favorite breakfast? Stack (overflow) pancakes.',
        jokeType: 'General'
    },
    {
        id: 44,
        jokeText: 'Why did the HTML tag wear a wedding ring? Because it was a closing tag.',
        jokeType: 'Frontend'
    },
    {
        id: 45,
        jokeText: 'I’d tell you a joke about UDP, but you might not get it.',
        jokeType: 'General'
    },
    {
        id: 46,
        jokeText: 'Why was the developer confused by his printer? It kept returning "404: Paper Not Found."',
        jokeType: 'General'
    },
    {
        id: 47,
        jokeText: 'What do you call a Java class that only prints text? A system out-age.',
        jokeType: 'Java'
    },
    {
        id: 48,
        jokeText: 'Why are developers bad at carpentry? They can\'t handle the constant need for *nails* (nulls).',
        jokeType: 'General'
    },
    {
        id: 49,
        jokeText: 'What’s a Python programmer\'s biggest fear? Indentured servitude.',
        jokeType: 'Python'
    },
    {
        id: 50,
        jokeText: 'Why did the assembly programmer get a bad job review? He was too low-level.',
        jokeType: 'General'
    }
];

export default app