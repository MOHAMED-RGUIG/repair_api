import { db } from "../config/db";

export const RepairModel = {
  async create(data: any) {
    const sql = `
      INSERT INTO repairs 
      (technicianName, machineNumber,machineName, customerName, remarks, partsChanged, partsNeeded, startTime, endTime, date, duration)
      VALUES (?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const params = [
      data.technicianName,
      data.machineNumber,
      data.machineName,
      data.customerName,
      data.remarks,
      JSON.stringify(data.partsChanged),
      JSON.stringify(data.partsNeeded),
      data.startTime,
      data.endTime,
      data.date,
      data.duration,
    ];

    const [result] : any = await db.query(sql, params);
    return result;
  },

  async getAll() {
    const [rows] : any[] = await db.query("SELECT * FROM repairs ORDER BY id DESC");
    return rows as any[];
  },
};
