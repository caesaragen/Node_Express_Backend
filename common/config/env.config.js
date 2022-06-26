module.exports = {
    "port": 3600,
    "appEndpoint": "http://localhost:3600",
    "apiEndpoint": "http://localhost:3600",
    "jwt_secret": "myS33!!creeeT",
    "jwt_expiration_in_seconds": 36000,
    "environment": "dev",
    "permissionLevels": {
        "NORMAL_USER": 1,
        "PAID_USER": 4,
        "ADMIN": 2048
    },
    "MONGO_URL" : "mongodb+srv://caesar:5t0rmR1d3r@cluster0.6zlyv.mongodb.net/node_backend?retryWrites=true&w=majority"


};
