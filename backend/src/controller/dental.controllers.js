import * as dentalService from "../service/dental.services.js";

export async function getAllRoomByDental(req, res) {
  try {
    const id = req.params.id;
    const data = await dentalService.getAllRoomByDental(id);
    res.send(data);
  } catch (error) {
    res.status(500).json({
      status: "Created failed",
      error: error.message,
    });
  }
}

export async function getAllModePayment(req, res) {
  try {
    const resutl = await dentalService.getAllModePayment();
    res.json(resutl);
  } catch (error) {
    res.status(500).json({
      status: "Created failed",
      error: error.message,
    });
  }
}
