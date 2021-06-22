const store = require('./DB/store');
const inquirer = require('inquirer');
const questions = require('./utils/questions');
const {menu, searchByName} = reqiure(".utils/questions")

async function userMenu() {
    const {choice} = await inquirer.prompt(menu);

    const formattedChoices = choices.toLowerCase().trim();
    switch (formattedChoices) {
        case 'search by employee name':return querysearchByName()
    }

}
async function querysearchByName(){
    const {name} = inquirer.prompt(questions.querysearchByName)
    store.searchByName(name);

    userMenu();
}
