import express from 'express';
import Salary from '../models/Salary.mjs';

const router = express.Router();

// GET /api/salary/:userId
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const salary = await Salary.findOne({ userId });

    if (!salary) {
      return res.status(404).json({ message: "Salary not found" });
    }

    const totalSalary = (salary.basic + salary.allowances - salary.deductions).toLocaleString();

    res.json({
      amount: `Rs. ${totalSalary}`,
      lastPaid: new Date().toLocaleDateString(), // You can customize this
      status: "Paid"
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching salary data" });
  }
});

export default router;
