import express, { Express, Request, Response } from 'express';

const app: Express = express();
app.use(express.json());

function start(port: number) {
  app.listen(port, () => {
    console.log(
      `Listening on port: ${port}, started in ${process.env.NODE_ENV} mode`
    );
  });
}

module.exports = {
  app,
  start,
};
