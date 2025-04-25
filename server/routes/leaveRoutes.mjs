import express from 'express';
import Leave from '../models/Leave.mjs';

const router = express.Router();
router.post('/', async (req, res) => {
  try {
    const { userId, reason } = req.body;

    const leave = new Leave({
      userId,
      date: new Date(),
      reason,
      status: 'Pending'
    });

    await leave.save();
    res.status(201).json({ message: 'Leave applied successfully',leave});
  } catch (err) {
    res.status(500).json({ message: 'Error applying for leave' });
  }
});
export default router;