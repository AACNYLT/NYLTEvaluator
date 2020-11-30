const express = require('express');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const schema = require('./graphql');

const app = express();
app.use(cors());
app.use(bodyParser.json());

process.env.DB_URL = 'mongodb://localhost:27017/admin';

mongoose.connect(process.env.DB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true
}).then(() => console.log('MongoDB connected')).catch(err => {
    throw new Error(err);
});

app.use('/graphql/:test', expressGraphQL({
    schema,
    graphiql: true
}));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));