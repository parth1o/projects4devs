import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const skillSchema = new Schema({
    name: String,
});

export const Skill = mongoose.model('Skill', skillSchema);
