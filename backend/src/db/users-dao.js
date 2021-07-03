import {User} from './users-schema';

export async function createUser(user) {
    const dbUser = new User(user);
    await dbUser.save();
    return dbUser;
}

export async function retrieveUser(id) {
    return User.findById(id);
}

export async function retrieveUserByEmail(email) {
    return User.findOne({email});
}

export async function retrieveUserById(id) {
    return User.findOne({_id: id});
}
