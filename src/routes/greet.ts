import { NextFunction, Router, Request, Response } from "express";
const router = Router();


router.route("/hello").get(async (req: Request, res: Response, next: NextFunction) => {
    const { visitor_name } = req.query;

    const response = await fetch(`https://demo.ip-api.com/json/${req.ip}?fields=66842623&lang=en`);
    if (!response.ok) return next(new Error("Failed to get ip address"));
    const { city } = await response.json();

    if (!visitor_name) return next(new Error("visitor_name not provided"));
    res.status(200).send({ greeting: `Hello ${visitor_name}`, client_ip: req.ip, location: city });
})

export { router };