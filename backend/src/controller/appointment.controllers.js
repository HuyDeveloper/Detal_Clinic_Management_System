import * as appointmentService from "../service/appointment.services.js"

export async function searchAppointmentByDentist(req, res) {
    try {
        const filters = req.query;
        const data = await appointmentService.searchAppointmentByDentist();
        console.log(data)
        const filteredUsers = data.filter(item =>
            item.FULLNAME.toLowerCase().includes(filters.name.toLowerCase()))
        res.send(filteredUsers); 
    } catch (error) {
        res.status(500).json({
            status: 'Created failed',
            error: error.message
        });
    }
}

export async function searchAppointmentByDentalClinic(req, res) {
    try {
        const filters = req.query;
        const data = await appointmentService.searchAppointmentByDentalClinic();
        const filteredUsers = data.filter(item =>
            item.DENTALNAME.toLowerCase().includes(filters.name.toLowerCase()))
        res.send(filteredUsers); 
    } catch (error) {
        res.status(500).json({
            status: 'Created failed',
            error: error.message
        });
    }
}

export async function searchAppointmentByCustomer(req, res) {
    try {
        const filters = req.query;
        const data = await appointmentService.searchAppointmentByCustomer();
        const filteredUsers = data.filter(item =>
            item.FULLNAME.toLowerCase().includes(filters.name.toLowerCase()))
        res.send(filteredUsers); 
    } catch (error) {
        res.status(500).json({
            status: 'Created failed',
            error: error.message
        });
    }
}

export async function searchAppointmentByDate(req, res) {
    try {
        const filters = req.query;
        const data = await appointmentService.searchAppointmentByDate(filters.date);
        const filteredUsers = data.filter(item =>
            item.APPDATE.toLowerCase().includes(filters.date.toLowerCase()))
        res.send(filteredUsers); 
    } catch (error) {
        res.status(500).json({
            status: 'Created failed',
            error: error.message
        });
    }
}