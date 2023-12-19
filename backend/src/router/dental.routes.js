import {Router} from "express";
import {getAllRoomByDental} from "../controller/dental.controllers.js";

const router = Router();

router.get('/:id', getAllRoomByDental);
