//****** saeed barcha  date mm-dd-yyyy 6-12-2021
 
///****   npm modules (chalk and validater pakages)  ****///
///  All the packages install using npm will save in package.json file as a dependency.
///  In a project where we use npm the package.json file will contains information related to all the lebraries and packagies we have installed using npm.

     //***example 
     //  npm install chalk
     //  npm install validater


//////////////////////////////////////////////////
/////****    importing chalk package     ****/////
//////////////////////////////////////////////////

//********   chalk module using single time in console   ********//
const chalk=require("chalk");


// to change text color.we need to just write name of color by putting after chalk keyword. 
console.log(chalk.blue('changing text color')); 

// to change background color.
console.log(chalk.bgGreen('changing  background color'));

// to change text and background color.
console.log(chalk.red.bgYellow('changing text and background color'));

// .inverse method converts  background and text color 
console.log(chalk.red.bgYellow.inverse('exchanging text and background color'));


//////********    chalk module using multiple times in console  ********//////

console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));

console.log(chalk.blue('Hello') + ' World' + chalk.red.bgGreenBright('!'));


console.log(chalk.blue.inverse('Hello') + ' World' + chalk.red.bgGreenBright.inverse('!'));

// Compose multiple styles using the chainable API
console.log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
console.log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));
// ES2015 template literal
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);


// ES2015 tagged template literal
// console.log(chalk`
// CPU: {red ${cpu.totalPercent}%}
// RAM: {green ${ram.used / ram.total * 100}%}
// DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
// `);

// Use RGB colors in terminal emulators that support it.
console.log(chalk.keyword('orange')('Yay for orange colored text!'));
console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
console.log(chalk.hex('#DEADED').bold('Bold gray!'));


//***** Easily define your own themes:

// const chalk = require('chalk');

const error = chalk.bold.red;
const warning = chalk.keyword('orange');

console.log(error('Error!'));
console.log(warning('Warning!'));


//////////////////////////////////////////////////
/////****        validater package       ****/////
//////////////////////////////////////////////////

//importing validater
const validator = require("validator");

const res= validator.isEmail("saeed@barcha.com");
console.log(res ? chalk.black.bgGreen(res) : chalk.black.bgRed(res));

const res1= validator.isEmail("saeedbarcha.com");
console.log(res1 ? chalk.black.bgGreen(res1) : chalk.black.bgRed(res1));
