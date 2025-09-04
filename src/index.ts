import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const app = express();

app.post('/api/v1/signup', (req, res) => {
    res.send('Hello World');
    //zod validation
    const username = req.body.username;
    const password = req.body.password;
    
})

app.post('/api/v1/signin', (req, res) => {
    res.send('signin');
})

app.get('/api/v1/content', (req, res) => {
    res.send('content');
})

app.get('/api/v1/content', (req, res) => {

})