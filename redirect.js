export default function handler(req, res) {
    const target = req.query.to;

    const now = new Date().toISOString();

    console.log("==================================================");
    console.log("TIME:", now);
    console.log("HIT FROM:", req.headers["x-forwarded-for"] || req.socket.remoteAddress);
    console.log("USER-AGENT:", req.headers["user-agent"]);
    console.log("REDIRECT TO:", target);

    if (!target) {
        console.log("ERROR: missing ?to=");
        console.log("==================================================");

        return res.status(400).send("missing ?to=");
    }

    console.log("==================================================");

    return res.redirect(302, target);
}
