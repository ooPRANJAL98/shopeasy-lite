const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('ShopEasy Lite is running'));
app.get('/health', (req, res) => res.json({ status: 'ok' }));
const port = process.env.PORT || 3000;
if (require.main === module) app.listen(port, () => console.log('Listening on ' + port));
module.exports = app;