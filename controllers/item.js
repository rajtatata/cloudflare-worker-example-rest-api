exports.getItems = (req, res) => {
    return res.send({ data: ["Item1", "Item2", "Item3"] })
}

exports.deleteItem = async (req, res) => {
    const { itemId } = req.params

    if (!itemId) {
        return res.send({ status: 0, message: "Wrong Data!" }, 400)
    }

    return res.send({ status: 1, message: `Successfully removed  ${itemId}!` })
}