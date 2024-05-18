import { sendEmail } from "../services/emailService";
import { fetchPiholeData, createReport } from "../services/piholeService";

export async function sendReport(req: any, res: any){
    try {
        const data = await fetchPiholeData();
        const report = createReport(data);
        await sendEmail('Daily Pi-hole Report', report);
        res.send('Report sent successfully.');
    } catch (error) {
        res.status(500).send('Failed to send report.');
    }
};
