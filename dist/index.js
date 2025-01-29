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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get("/api/get", (req, res) => {
    const { email, password } = req.body;
    const prisma = new client_1.PrismaClient();
    let user = prisma.user
        .findFirst({
        where: {
            email: email,
        },
    })
        .then((data) => {
        console.log(data);
    });
    res.json({
        message: "User found",
        user: user,
    });
});
app.post("/api/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const prisma = new client_1.PrismaClient();
    let user = yield prisma.user
        .create({
        data: {
            name: name,
            email: email,
            password: password,
        },
        select: {
            email: true,
        },
    })
        .catch((error) => {
        console.log(error);
    });
    const token = jsonwebtoken_1.default.sign({ id: email }, process.env.JWT_SECRATE);
    res.json({
        message: "User created successfully",
        token: token,
    });
}));
app.put("/api/user", (req, res) => {
    const { id, name, email, password } = req.body;
    const prisma = new client_1.PrismaClient();
    let user = prisma.user
        .update({
        where: {
            id: id,
        },
        data: {
            name: name,
            email: email,
            password: password,
        },
    })
        .then((data) => {
        res.send("User updated successfully");
    })
        .catch((error) => {
        console.log(error);
    });
});
app.delete("/api", (req, res) => {
    res.send("Delete request");
});
//Blogg API
app.put("/api/blog", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, title, content } = req.body;
    const prisma = new client_1.PrismaClient();
    let user = yield prisma.post
        .update({
        where: {
            id: id,
            userId: id,
        },
        data: {
            title: title,
            content: content,
        },
    })
        .then((data) => {
        res.send("Post updated successfully");
    })
        .catch((error) => {
        console.log(error);
    });
}));
app.post("/api/blog", (req, res) => {
    const { id, title, content } = req.body;
    const prisma = new client_1.PrismaClient();
    const post = prisma.post
        .create({
        data: {
            title: title,
            content: content,
            user: {
                connect: { id: id },
            },
        },
    })
        .then((data) => {
        console.log(data);
    })
        .catch((error) => {
        console.log(error);
    });
    res.send("Post created successfully");
});
app.get("/api/blog", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new client_1.PrismaClient();
    const { user, id } = req.body;
    const post = yield prisma.post
        .findMany({
        where: {
            userId: user,
            id: id,
        },
    })
        .catch((error) => {
        console.log(error);
    });
    res.json({
        message: "Post found",
        post: post,
    });
}));
app.delete("/api/blog", (req, res) => {
    const { id, userId } = req.body;
    const prisma = new client_1.PrismaClient();
    const user = prisma.user
        .deleteMany({
        where: {
            id: id,
        },
    })
        .then(() => {
        res.send("User deleted successfully");
    })
        .catch((error) => {
        console.log(error);
    });
});
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
