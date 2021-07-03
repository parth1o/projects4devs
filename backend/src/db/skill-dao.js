import { Skill } from './skill-schema';

async function createSkill(skill) {
    const dbSkill = new Skill(skill);
    await dbSkill.save();
    // try {
    //     await User.findByIdAndUpdate(userId,{ $push: {plans: dbPlan._id}})
    // } catch (err) {
    //     console.log(err);
    // }
    return dbSkill;
}

// Returns list of projects
async function retrieveSkillList() {
    // const dbUser = await User.findById(userId);
    let skillList = await Skill.find();
    let newSkillList = []
    skillList.forEach(element => {
        newSkillList.push(element.name)
    });
    return newSkillList
}

export { createSkill, retrieveSkillList };
