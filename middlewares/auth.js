exports.authMiddleware = (req, res) => {
    req.isAuthenticated = true
    req.username = "flaviorajta"
}