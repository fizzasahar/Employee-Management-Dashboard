import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
	{
		name: {
			// type: String,
			type: mongoose.Schema.Types.String,
			required: true,
		},
		email: {
			type: mongoose.Schema.Types.String,
			required: true,
			unique: true,
			lowercase: true
		},
		password: {
			type: mongoose.Schema.Types.String,
			required: true,
		},

		isCustomer: {
			type: Boolean,
			default: false,
		},
		gender: String,
		role: {
			type: String,
			default: 'employee'
		}
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	},
);
// userSchema.index({ email:1 },{ unique:true })
const User = mongoose.model('User', userSchema);
export default User;
