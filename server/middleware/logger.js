/**
 * Custom logging middleware for the Gym x project.
 * Logs essential request details, including time, method, URL, IP, and payload (query/body).
 */
const logger = (req, res, next) => {
    // 1. Get the current timestamp
    const timestamp = new Date().toISOString();

    // 2. Determine the request source IP (handling common proxy headers)
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress;

    // 3. Log the payload (request body for POST/PUT/PATCH, query for GET/DELETE)
    let payload;
    if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
        // Create a copy of the body to avoid modifying the original request object
        // and remove sensitive fields like 'password' before logging.
        const bodyCopy = { ...req.body };
        if (bodyCopy.password) {
            bodyCopy.password = '[HIDDEN]';
        }
        payload = bodyCopy;
    } else if (req.query && Object.keys(req.query).length > 0) {
        payload = req.query;
    } else {
        payload = 'N/A';
    }

    // 4. Construct the log message
    const logMessage = `
[REQUEST LOG]
├── Time:      ${timestamp}
├── Method:    ${req.method}
├── URL:       ${req.protocol}://${req.get('host')}${req.originalUrl}
├── IP:        ${ip}
└── Payload:   ${JSON.stringify(payload, null, 2)}
    `;

    // Log the message to the console
    console.log(logMessage);

    // Proceed to the next middleware or route handler
    next();
};

module.exports = logger;