// import jwtmod from "jsonwebtoken";

const jwtmod = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

    if (token == null) return res.sendStatus(401); // No token provided

    const public_key = `-----BEGIN PUBLIC KEY-----
${process.env.KEYCLOAK_PUBLIC_KEY}
-----END PUBLIC KEY-----`;


    try {
        // verify and decode are same methods
        const decodedToken = jwtmod.verify(token, public_key, {
            algorithms: ["RS256"],
        });

        const { email, preferred_username } = decodedToken;
        req.user = email;

        next();
    } catch (err) {
        console.error("Token verification failed:", err);
        return res.status(403).json({ message: "Invalid token" });
    }
};

module.exports = authenticate;