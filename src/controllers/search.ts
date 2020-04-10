import { Request, Response, NextFunction } from "express";
import {Corona} from "../corona/corona";

export const search = (req: Request, res: Response) => {
    let corona = new Corona("123");
    let response = corona.do("test_url");
    res.render("home", {
        title: "Home"
    });
};