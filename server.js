const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/Login-Page'

));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/Login-Page/'}),
);
app.listen(process.env.PORT || 8080);