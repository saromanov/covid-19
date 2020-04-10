import { Request, Response, NextFunction } from "express";
import {Corona} from "../corona/corona";

export const index = (req: Request, res: Response) => {
    let corona = new Corona("123");
    let response = corona.do("https://pomber.github.io/covid19/timeseries.json");
    res.json({ error: "22" })
};