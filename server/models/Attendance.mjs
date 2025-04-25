import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  checkIn: Date,
  checkOut: Date
});
export default mongoose.model('Attendance', attendanceSchema);

