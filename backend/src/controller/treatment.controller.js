import * as treatmentService from "../service/treatment.service.js";

export async function addTreatment(req, res) {
  try {
    const treatment = req.body;
    const treid = req.body.treid;
    const toothid = req.body.toothid;
    const tooth_price_temp = await treatmentService.findToothPriceInTOOTH_PRICE(
      treid,
      toothid
    );
    const tooth_price = tooth_price_temp[0][0].CURRENTPRICE;
    const temp = await treatmentService.addTreatment(treatment);

    const stID = temp[0][0].STID; //select stid sau khi insert
    const addToothTemp = await treatmentService.addTooth(
      stID,
      treatment,
      tooth_price
    );
    const addMedicineTemp = await treatmentService.addMedicine(stID, treatment);
    res.json({
      message: "Success",
      stID,
    });
  } catch (error) {
    res.json({
      message: "Fail",
      error: error.message,
    });
  }
}

export async function createInvoice(req, res) {
  try {
    const invoice = req.body;
    const temp = await treatmentService.createInvoice(invoice);
    res.json({
      message: "Success",
      temp,
    });
  } catch (error) {
    res.json({
      message: "Fail",
      error: error.message,
    });
  }
}

export async function getAllTreatments(req, res) {
  try {
    const treatments = await treatmentService.getAllTreatments();
    res.json({
      message: "Success",
      treatments,
    });
  } catch (error) {
    res.json({
      message: "Fail",
      error: error.message,
    });
  }
}
export async function getAllTooth(req, res) {
  try {
    const tooth = await treatmentService.getAllTooth();
    res.json({
      message: "Success",
      tooth,
    });
  } catch (error) {
    res.json({
      message: "Fail",
      error: error.message,
    });
  }
}

export async function getAllSurface(req, res) {
  try {
    const surface = await treatmentService.getAllSurface();
    res.json({
      message: "Success",
      surface,
    });
  } catch (error) {
    res.json({
      message: "Fail",
      error: error.message,
    });
  }
}

export async function getSelectTreatmentByCusId(req, res) {
  try {
    const id = req.params.id;
    console.log(id);
    const data = await treatmentService.getSelectTreatmentByCusId(id);
    res.send(data);
  } catch (error) {
    res.status(500).json({
      status: "Created failed",
      error: error.message,
    });
  }
}

export async function getDetailSelectTreatmentById(req, res) {
  try {
    const id = req.params.id;
    const data = await treatmentService.getDetailSelectTreatmentById(id);
    res.send(data);
  } catch (error) {
    res.status(500).json({
      status: "Created failed",
      error: error.message,
    });
  }
}
export async function getDetailProblemById(req, res) {
  try {
    const id = req.params.id;
    const data = await treatmentService.getDetailProblemById(id);
    res.send(data);
  } catch (error) {
    res.status(500).json({
      status: "Created failed",
      error: error.message,
    });
  }
}

export async function getInvoiceByStid(req, res) {
  try {
    const id = req.params.id;
    const data = await treatmentService.getInvoiceByStid(id);
    res.send(data);
  } catch (error) {
    res.status(500).json({
      status: "Created failed",
      error: error.message,
    });
  }
}

export async function updateSelectTreatment(req, res) {
  try {
    const id = req.params.id;
    console.log(req.body);
    const note = req.body.note;
    const timeofreex = req.body.timeofreex;
    const quantity = req.body.quantity;
    const surface = req.body.surface;
    const medicine = req.body.medicine;

    const data = await treatmentService.updateSelectTreatment(
      id,
      note,
      timeofreex,
      medicine,
      quantity,
      surface
    );
    res.json({ data, message: "Success" });
  } catch (error) {
    res.status(500).json({
      status: "Created failed",
      error: error.message,
    });
  }
}

export async function updateStateTreatment(req, res) {
  try {
    const id = req.params.id;
    const state = req.body.state;
    console.log(state);
    const data = await treatmentService.updateStateTreatment(id, state);
    res.json({ data, message: "Success" });
  } catch (error) {
    res.status(500).json({
      status: "Updated failed",
      error: error.message,
    });
  }
}
export async function addTreat(req, res) {
  try {
    const treatment = req.body;
    
    const addTreatment= await treatmentService.addTreat(treatment);
    res.json({
      message: "Success",
      addTreatment,
    });
  } catch (error) {
    res.json({
      message: "Fail",
      error: error.message,
    });
  }
}
export async function updateTreat(req,res){
  try {
    const treatment = req.body;
    const id1 = req.query.id;
    console.log(id1+"id:")
    const updateTreatment= await treatmentService.updateTreat(treatment,id1);
    res.json({
      message: "Success",
      updateTreatment,
    });
  } catch (error) {
    res.json({
      message: "Fail",
      error: error.message,
    });
  }
}
