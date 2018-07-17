const skillsMod = require("./skills.js");
console.log(skillsMod);
function Builder(){
	const self = this;
	self.makeProgrammingXP = makeProgrammingExperience.bind(self);
	self.makeProgrammingXPCard = makeProgrammingXPCard.bind(self);
}
const builder = new Builder();


function makeProgrammingExperience(skills, className, starCount){
	const programmingTemplate = skills.map((skill) => this.makeProgrammingXPCard(skill, className));
	console.log(programmingTemplate);
};

function makeProgrammingXPCard(skill, className){
	const stars = makeStars(skill);
	const li = `<li>
									<a href="#skillText"><div id="skillText" class="tooltip" onclick="showSkill(javaProg,progLang)">
	              		<span class="tooltiptext">Java</span>
	              		<img class="langLogo" src="images/skills/java-logo.png" alt="Java"/>
	              		<img src="images/skills/star.png" alt="star">
										${stars}
	            </div></a>
							</li>
	`;
	return li;
}
function makeStars(skill){
	const total = 5;
	const stars = skill.stars*`<img src="images/skills/star.png" alt="star">`;
	const circles =(total-skill.stars)*`<img src="images/skills/circle.png" alt="circle" />`;
	return stars+circles;
}

builder.makeProgrammingXP(skillsMod, "className");
