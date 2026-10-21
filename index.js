const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// ตั้งค่าให้ Express เสิร์ฟไฟล์ Static (เช่น CSS, JS, รูปภาพ) จากโฟลเดอร์ 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route สำหรับหน้าแรก (ส่งไฟล์ index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// เริ่มรันเซิร์ฟเวอร์
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});