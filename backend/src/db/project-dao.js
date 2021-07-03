import { Project } from './project-schema';
import { createSkill, retrieveSkillList } from './skill-dao';

async function createProject(project) {
    const dbProject = new Project(project);
    await dbProject.save();
    // const skillList = await retrieveSkillList();
    // console.log(skillList);
    // console.log(project.skill);

    // project.skill.forEach(async (element) => {
    //     let key = element.name;
    //     console.log(key);
    //     if (!skillList.includes(key)) {
    //         let skill = { name: key };
    //         await createSkill(skill);
    //     }
    // });

    return dbProject;
}

// Returns list of projects
async function retrieveProjectList() {
    return await Project.find();
}

// Returns list of projects
async function deleteAllProjects() {
    return await Project.deleteMany();
}

export { createProject, retrieveProjectList, deleteAllProjects };
