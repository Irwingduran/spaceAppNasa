// pages/api/eonet.js

export default async function handler(req, res) {
    const { eventType } = req.query;

    if (req.method === 'GET') {
        try {
            let url = 'https://eonet.gsfc.nasa.gov/api/v3/events';

            if (eventType) {
                url = `https://eonet.gsfc.nasa.gov/api/v3/categories/${eventType}`;
            }

            const response = await fetch(url);
            const data = await response.json();

            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching data from EONET API' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}