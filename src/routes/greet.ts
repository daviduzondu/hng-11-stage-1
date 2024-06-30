import { NextFunction, Router, Request, Response } from "express";
const router = Router();


router.route("/hello").get((req: Request, res: Response, next: NextFunction) => {
    const { visitor_name } = req.query;
    console.log(req.ip);
    if (!visitor_name) { next(new Error("visitor_name not provided")); return }
    res.status(200).send({ greeting: `Hello ${visitor_name}`, client_ip: req.ip });
})

export { router };