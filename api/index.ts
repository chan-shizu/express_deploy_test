import { NextFunction, Request, Response } from "express";

const express = require("express");
const app = express();

/**
 * サーバ起動
 */
const server = app.listen(8000, function () {
  console.log("🚀 app started. port:" + server.address().port);
});

/**
 * GET /test
 */
app.get(
  "/test",
  async function (req: Request, res: Response, next: NextFunction) {
    console.log("/test called!!!%");
    res.send("/test called!!!");
  }
);

/**
 * GET /test
 */
app.get(
  "/test2",
  async function (req: Request, res: Response, next: NextFunction) {
    console.log("/test called2");
    res.send("/test called2");
  }
);
