import express from 'express';
const userRoutes = require('./routes/userRoutes');
const app = express();
app.use(express.json());
app.use(userRoutes);
app.use;
function start(port) {
    app.listen(port, () => {
        console.log(`Listening on port: ${port}, started in ${process.env.NODE_ENV} mode`);
    });
}
module.exports = {
    app,
    start,
};
