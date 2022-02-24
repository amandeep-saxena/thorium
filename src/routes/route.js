const { Router } = require('express');
const express = require('express');
const router = express.Router();


router.get('/students/:name', function (req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

const movies = ["fukrey", "delhi", "dabang", "rockster", "suryawansh"]

router.get('/movies', function (req, res) {

    res.send(movies)
})

router.get('/movies/:index', function (req, res) {
    let index = res.params.index;

    if (index > movies.length) {
        res.send("doesnt exist")

    } else {
        res.send(movies[index - 1])
    }


})
let film = [
    {
        id: 1,
        name: "the shining"

    }, {

        id: 2,
        name: "incendies"

    }, {

        id: 3,
        name: "Rang De basanti"

    }, {

        id: 4,
        name: " finding demo"
    }
]

router.get('/films', function (req, res) {

    res.send(film)
})

let filmArr = [
    {
        id: 1,
        name: "the shining"

    }, {

        id: 2,
        name: "incendies"

    }, {

        id: 3,
        name: "Rang De basanti"

    }, {

        id: 4,
        name: " finding demo"
    }
]


router.get("/films/:filmID", function (req, res) {



    filmID= req.params.filmID;
    if (filmID> film.length) {
        res.send("No movie exists with this id")
    } else {
        res.send(film[filmID - 1])
    }
})


module.exports = router;
