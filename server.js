// server.js (ES Module syntax)
import express from "express";
import cors from "cors";
import fs from "fs";
import ExcelJS from "exceljs";

const app = express();
app.use(cors());
app.use(express.json());

const filePath = "./orders.xlsx";

app.post("/api/orders", async (req, res) => {
  try {
    const { name, phone, address, quantity, productName, productImage } = req.body;

    const workbook = new ExcelJS.Workbook();
    let sheet;

    if (fs.existsSync(filePath)) {
      await workbook.xlsx.readFile(filePath);
      sheet = workbook.getWorksheet("Orders") || workbook.addWorksheet("Orders");
    } else {
      sheet = workbook.addWorksheet("Orders");
      sheet.addRow(["Name", "Phone", "Address", "Quantity", "Product Name", "Product Image"]);
    }

    sheet.addRow([name, phone, address, quantity, productName, productImage]);

    await workbook.xlsx.writeFile(filePath);

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
