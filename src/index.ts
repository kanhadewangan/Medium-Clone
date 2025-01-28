import express, { Router } from "express";
import { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/get", (req: any, res: any) => {
  const { email, password } = req.body;
  const prisma = new PrismaClient();
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

app.post("/api/signup", async (req: any, res: any) => {
  const { name, email, password } = req.body;
  const prisma = new PrismaClient();
  let user = await prisma.user
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
  const token = jwt.sign({ id: email },  process.env.JWT_SECRATE as string, );
  res.json({
    message: "User created successfully",
    token: token,
  });
});

app.put("/api/user", (req: any, res: any) => {
  const { id, name, email, password }: any = req.body;
  const prisma = new PrismaClient();
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
app.delete("/api", (req: any, res: any) => {
  res.send("Delete request");
});

//Blogg API

app.put("/api/blog", async (req: any, res: any) => {
  const { id, title, content } = req.body;
  const prisma = new PrismaClient();
  let user = await prisma.post
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
});

app.post("/api/blog", (req: any, res: any) => {
  const { id, title, content } = req.body;
  const prisma = new PrismaClient();
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

app.get("/api/blog", async (req: any, res: any) => {
  const prisma = new PrismaClient();
  const { user, id } = req.body;

  const post = await prisma.post
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
});
app.delete("/api/blog", (req: any, res: any) => {
  const { id, userId } = req.body;
  const prisma = new PrismaClient();
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
