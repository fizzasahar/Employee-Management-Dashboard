import mongoose from "mongoose";

const salarySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  basic: Number,
  allowances: Number,
  deductions: Number
});
export default  mongoose.model('Salary', salarySchema);

