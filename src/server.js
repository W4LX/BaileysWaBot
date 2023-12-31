import express from "express";

export function keepAlive() {
  const app = express();

  app.get("/", (req, res) => {
    res.send("Bot en funcionamiento. ");
  });

  app.listen(process.env["PORT"] || 3000, () => {
    console.log("Ready!");
  });
}
