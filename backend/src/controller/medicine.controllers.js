import {
  getAllMedicine,
  addMedicine,
  deleteMedicine,
  updateMedicine,
  getDetailMedicine,
  getDetailTooth,
} from "../service/medicine.services.js";

export const getAllMedicineController = async (req, res) => {
  const listMedicine = await getAllMedicine();
  return res.json({
    message: "Success",
    listMedicine,
  });
};

export const addMedicineController = async (req, res) => {
  const medicine = req.body;
  console.log(medicine);
  await addMedicine(medicine);
  return res.json({
    message: "Success",
  });
};

export const deleteMedicineController = async (req, res) => {
  const name = req.query.name;
  await deleteMedicine(name);
  return res.json({
    message: "Success",
  });
};

export const updateMedicineController = async (req, res) => {
  const name = req.query.name;
  const medicine = req.body;
  await updateMedicine(medicine, name);
  return res.json({
    message: "Success",
  });
};

export const getDetailMedicineController = async (req, res) => {
  const stid = req.params.stid;
  const listMedicine = await getDetailMedicine(stid);
  return res.json({
    message: "Success",
    listMedicine,
  });
};

export const getDetailToothController = async (req, res) => {
  const stid = req.params.stid;
  const tooth = await getDetailTooth(stid);
  return res.json({
    message: "Success",
    tooth,
  });
};
