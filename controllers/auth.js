var jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
    const { username } = await req.body()

    if (!username) {
        return res.send({ status: 0, message: "Please send a username!" }, 400)
    }
    var token = jwt.sign({ username }, "helloworld")
    return res.send({ status: 1, token, message: `Hello ${username}` })
}