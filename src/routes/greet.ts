import { NextFunction, Router, Request, Response } from "express";
const router = Router();


router.route("/hello").get(async (req: any, res: Response, next: NextFunction) => {
    const { visitor_name } = req.query;

    const response = await fetch(`http://ip-api.com/json/${req.ip}?fields=66842623&lang=en`);

    if (!response.ok) return next(new Error("failed to get location based on ip address"));

    const locData = await response.json();

    req.error = locData;
    if (!locData.city) return next(new Error("failed to get location based on ip address"));

    if (!visitor_name) return next(new Error("visitor_name not provided"));
    res.status(200).send({ greeting: `Hello ${visitor_name}`, client_ip: req.ip, location: locData.city });
})

export { router };