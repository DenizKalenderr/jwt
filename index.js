import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json()); // bu middleware gelen isteklerdei json u parse ediyor ve sadece content typeın uyuştuğu isteklere bakıyor.

const user = {
    username: "admin",
    email: "admin@gmail.com" ,
    password: "123456"
}

app.post("/login", async (req, res) => {

    const { email, password } = req.body

    if(email !== user.email || password !== user.password) {
        return res.status(401).json({ message: "Bilgiler geçersiz"});
    }

})

app.listen(5000, () => {
    console.log("Server is ready on port 5000")
})