import { NextFunction, Router, Request, Response } from "express";
const router = Router();


router.route("/hello").get(async (req: Request, res: Response, next: NextFunction) => {
    const { visitor_name } = req.query;
    const name = visitor_name as string

    const fetchResponse = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${req.ip}London&aqi=no`);
    const { location, current, error } = await fetchResponse.json();

    if (!fetchResponse.ok) {
        return next(new Error(`Failed to locate ip address (${req.ip}): ${error.message}`));
    }

    if (!visitor_name) return next(new Error("visitor_name not provided"));
    res.status(200).send({ greeting: `Hello ${name.replaceAll('\"', '')}, the temperature is ${current.temp_c} degrees Celcius in ${location.region}`, client_ip: req.ip, location: location?.region });
})

export { router };