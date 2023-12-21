import * as cheatsheetService from '../service/cheatsheetService.js';

export async function test(req, res) {
    try {
        const user = await cheatsheetService.test();
        res.status(201).json('success');
        } catch (error) {
        res.status(500).json({
            status: 'Created failed',
            error: error.message
        });
    }
}
