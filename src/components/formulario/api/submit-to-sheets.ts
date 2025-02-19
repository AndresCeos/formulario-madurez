// pages/api/submit-to-sheets.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const { rows } = req.body;

  try {
    // Configuración de autenticación con Google
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT || '{}'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.SPREADSHEET_ID;

    // Convierte cada objeto de fila en un array de valores (asegúrate de que el orden de columnas coincida con tu hoja)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = rows.map((row: any) => Object.values(row));

    // Inserta las filas al final de la hoja (por ejemplo, en "Sheet1")
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId!,
      range: 'Sheet1!A1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: data,
      },
    });

    res.status(200).json({ result: result.data });
  } catch (error) {
    console.error('Error al insertar datos en Google Sheets:', error);
    res.status(500).json({ error: String(error) });
  }
}
