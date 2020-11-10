require('dotenv-safe/config');
const app = require('./app');

const { PORT } = process.env;

app.listen(PORT, () => console.log(`> node-essential start on port ${PORT}`));
