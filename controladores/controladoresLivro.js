
function getLivros (req, res) {
    try {
        res.send("Ola Mundo!");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getLivros
}