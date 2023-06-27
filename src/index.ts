import express from "express"

const app = express();

app.listen(process.env.PORT || 4000, () => {
  console.log(`Running on port ${process.env.PORT || 4000}`);
});