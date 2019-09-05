const app = require('./config/express');

const port = app.get('port');

app.listen(port, () => console.log(`Server is running in ${process.env.NODE_ENV} at port ${port}`));
