import mongoose from 'mongoose';
import crypto from 'crypto';
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
    password: {type: String, required: true},
    description: String,
    skills: [{
        name: String,
        proficiency: String
    }]
});

const iterations = 2000;

userSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }

    this.password = crypto.pbkdf2Sync(
        this.password,
        process.env.SALT,
        iterations,
        64,
        'sha256'
    ).toString('hex');
    console.log(this.password)

    next();
});

/*
 Return true if correct password
 */
userSchema.methods.comparePassword = function(plainText) {
    let hash = crypto.pbkdf2Sync(
        plainText,
        process.env.SALT,
        iterations,
        64,
        'sha256'
    ).toString('hex');

    return hash === this.password;
};

const user = mongoose.model('user', userSchema);

export {user as User};
