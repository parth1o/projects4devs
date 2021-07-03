import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const projectSchema = new Schema({

    name: { type: String, required: true },
	owner: String,
	description: { type: String, required: true },
	numPeople: { type: String, required: true } ,
	githubLink: { type: String, required: true },
    skill: [{
        name: String,
        proficiency: String
    }],

}, {
    timestamps: {}
});

export const Project = mongoose.model('Project', projectSchema);