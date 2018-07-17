const skills = [];
skills.push(new Skill("Javascript", "Javascript", 4))
module.exports = skills;

function Skill(name, tooltipText, stars){
	const self = this;
	self.name = name;
	self.tooltipText = tooltipText;
	self.stars = stars;
}

