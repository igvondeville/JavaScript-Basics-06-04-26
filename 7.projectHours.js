//•"The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."

function projectHours(name, hours){
    let oneProject = 3;
    let totalProjects = oneProject * hours;
    console.log(`The architect ${name} will need ${totalProjects} hours to complete ${hours} project/s.`);
}
projectHours("Noone", 5);