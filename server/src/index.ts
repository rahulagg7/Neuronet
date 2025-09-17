import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { UserModel } from "./db.js";

const app = express();
app.use(express.json());

app.post('/api/v1/signup', async (req, res) => {
    res.send('Hello World');
    //zod validation 
    // hash the password
    //type module in package.json
    //if user already exists it crashes the returm diff status code
    const username = req.body.username;
    const password = req.body.password;
    await UserModel.create({
        username: username,
        password: password
    });

    res.json({
        message: "user created successfully"
    })
})

app.post('/api/v1/signin', (req, res) => {
    res.send('signin');
})

app.get('/api/v1/content', (req, res) => {
    res.send('content');
})

app.get('/api/v1/content', (req, res) => {

})