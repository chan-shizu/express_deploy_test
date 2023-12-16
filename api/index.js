"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const app = express();
/**
 * サーバ起動
 */
const server = app.listen(8000, function () {
    console.log('🚀 app started. port:' + server.address().port);
});
/**
 * GET /test
 */
app.get('/test', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('/test called!!!');
        res.send('/test called!!!');
    });
});
/**
 * GET /test
 */
app.get('/test2', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('/test called2');
        res.send('/test called2');
    });
});
