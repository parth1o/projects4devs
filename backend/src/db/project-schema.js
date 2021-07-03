import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const projectSchema = new Schema({

    name: { type: String, required: true },
	owner: { type: Schema.Types.ObjectId, ref:'user' },
	description: { type: String, required: true },
	githubLink: { type: String, required: true },
}, {
    timestamps: {}
});

export const Project = mongoose.model('Project', projectSchema);