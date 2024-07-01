import { NextFunction, Router, Request, Response } from "express";
const router = Router();


router.route("/hello").get(async (req: Request, res: Response, next: NextFunction) => {
    const { visitor_name } = req.query;
    let locationData;
    const name = visitor_name as string
    try {
        const fetchResponse = await fetch(`http://ip-api.com/json/${req.ip}?fields=66842623&lang=en`);
        locationData = await fetchResponse.json();
        if (!fetchResponse.ok || locationData.status === 'fail') {
            throw new Error(`Failed to locate ip address (${locationData.query}): ${locationData.message}`)
        }
    } catch (e) {
        return next(e);
    }

    if (!visitor_name) return next(new Error("visitor_name not provided"));
    res.status(200).send({ greeting: `Hello ${name.replaceAll('\"', '')}`, client_ip: req.ip, location: locationData?.city });
})

export { router };