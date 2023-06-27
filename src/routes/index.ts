import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    console.log("Hello world")
    res.send("Hello world")
})

export default router;