function getUsers(req, res) {
    const db = req.app.get('db')

    db.getUsers()
    .then(response => {
        res.status(200).json(response)
    })
}

function addUsers(req, res){
    const db = req.app.get('db')
    const {username, name, birth_date, fav_fruit} = req.body;

    db.addUsers(username, name, birth_date, fav_fruit).then(response => {
        res.status(200).json(response)
    })
}

function updateUsers(req, res){
    const db = req.app.get('db')
    const id = +req.params.id
    const {username, name, birth_date, fav_fruit} = req.body;

    db.updateUsers(username, name, birth_date, fav_fruit, id).then(response => {
        res.status(200).json(response)
    })
}

function deleteUsers(req, res){
    const db = req.app.get('db')
    const id = +req.params.id

    db.deleteUsers(id).then(() => {
        res.sendStatus(200)
    })
}

module.exports ={ 
    getUsers,
    addUsers,
    updateUsers,
    deleteUsers
}