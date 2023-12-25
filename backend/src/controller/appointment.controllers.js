import * as appointmentService from "../service/appointment.services.js";

export async function searchAppointmentByDentist(req, res) {
  try {
    const filters = req.query;
    const data = await appointmentService.searchAppointmentByDentist();
    console.log(data);
    const filteredUsers = data.filter((item) =>
      item.FULLNAME.toLowerCase().includes(filters.name.toLowerCase())
    );
    res.send(filteredUsers);
  } catch (error) {
    res.status(500).json({
      status: "Created failed",
      error: error.message,
    });
  }
}

export async function searchAppointmentByDentalClinic(req, res) {
  try {
    const filters = req.query;
    const data = await appointmentService.searchAppointmentByDentalClinic();
    const filteredUsers = data.filter((item) =>
      item.DENTALNAME.toLowerCase().includes(filters.name.toLowerCase())
    );
    res.send(filteredUsers);
  } catch (error) {
    res.status(500).json({
      status: "Created failed",
      error: error.message,
    });
  }
}

export async function searchAppointmentByCustomer(req, res) {
  try {
    const filters = req.query;
    const data = await appointmentService.searchAppointmentByCustomer();
    const filteredUsers = data.filter((item) =>
      item.CUSTOMER_NAME.toLowerCase().includes(filters.name.toLowerCase())
    );
    res.send(filteredUsers);
  } catch (error) {
    res.status(500).json({
      status: "Created failed",
      error: error.message,
    });
  }
}
function convertDate(dateString) {
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // Thêm số 0 phía trước nếu cần
  const day = date.getUTCDate().toString().padStart(2, "0"); // Thêm số 0 phía trước nếu cần

  return `${year}-${month}-${day}`;
}

export async function searchAppointmentByDate(req, res) {
  try {
    const filters = req.query;
    const data = await appointmentService.searchAppointmentByCustomer();
    const filteredUsers = data.filter((item) =>
      convertDate(item.APPDATE).includes(filters.date)
    );
    console.log(filteredUsers);
    res.send(filteredUsers);
  } catch (error) {
    res.status(500).json({
      status: "Created failed",
      error: error.message,
    });
  }
}

export async function deleteAppointment(req, res) {
  try {
    const { id } = req.params;
    const result = await appointmentService.deleteAppointment(id);
    res.json({
      message: "Success",
      result,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export async function updateAppointment(req, res) {
  try {
    const { id } = req.params;
    const appointment = req.body;
    const result = await appointmentService.updateAppointment(id, apppointment);
    res.json({
      message: "Success",
      result,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export async function getAllAppointment(req, res) {
  try {
    const result = await appointmentService.getAllAppointment();
    res.json({
      message: "Success",
      result,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export async function getAppointmentById(req, res) {
  try {
    const { id } = req.params;
    const result = await appointmentService.getAppointmentById(id);
    res.json({
      message: "Success",
      result,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export async function editAppointment(req, res) {
  try {
    const appointment = req.body;
    const result = await appointmentService.editAppointment(appointment);
    res.json({
      message: "Success",
      result,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}
