import { Project } from './project-schema';

async function createProject(project) {

    const dbProject = new Project(project);
    await dbProject.save();
    // try {
    //     await User.findByIdAndUpdate(userId,{ $push: {plans: dbPlan._id}})
    // } catch (err) {
    //     console.log(err);
    // }
    return dbProject;
}

// Returns list of projects
async function retrieveProjectList() {
    // const dbUser = await User.findById(userId);
    return await Project.find();
}

export {
    createProject,
    retrieveProjectList,
}