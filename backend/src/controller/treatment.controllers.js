import * as treatmentService from "../service/treatment.services.js"

export async function getSelectTreatmentByCusId(req, res) {
    try {
        const id = req.params.id;
        const data = await treatmentService.getSelectTreatmentByCusId(id);
        res.send(data);
    } catch (error) {
        res.status(500).json({
            status: 'Created failed',
            error: error.message
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
            status: 'Created failed',
            error: error.message
        });
    }
}