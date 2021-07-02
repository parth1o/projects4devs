import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (e) {
                return /.+@aucklanduni.ac.nz$/.test(e);
            },
            message: props => `${props.value} is not a University of Auckland email!`
        }
    },
    description: String,
    skills: [{
        name: String,
        proficiency: String
    }]
});

const user = mongoose.model('user', userSchema);

export {user};
