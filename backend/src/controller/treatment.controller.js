import * as treatmentService from "../service/treatment.service.js";

export async function addTreatment(req, res) {
  try {
    const treatment = req.body;
    const temp = await treatmentService.addTreatment(treatment);
    const stID = temp[0][0].STID;
    const addToothTemp = await treatmentService.addTooth(stID, treatment);
    const addMedicineTemp = await treatmentService.addMedicine(stID, treatment);
    res.json({
      message: "Success",
      temp,
      addToothTemp,
    });
  } catch (error) {
    res.json({
      message: "Fail",
      error: error.message,
    });
  }
}
