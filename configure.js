var chalk = require('chalk');
var clear = require('clear');
var CLI = require('clui');
var figlet = require('figlet');
var inquirer = require('inquirer');

clear();
console.log(
  chalk.green(
    figlet.textSync('CASBP', { horizontalLayout: 'full' })
  )
);
console.log(chalk.yellow("Utilidad de configuración de proyecto de Ionic 3 para Clinica Alemana"));
console.log(chalk.blue("Servicio de informática clínica"));
console.log(chalk.blue("Departamento de informática biomédica"));
console.log(chalk.blue("Clínica Alemana de Santiago"));
console.log("\n");

//CONFIGURACIÓN DE FIREBASE
console.log(chalk.red("FIREBASE"));
firebaseConfiguration(function(){
  console.log(arguments);

  //CONFIGURACIÓN DE AUTH0
  console.log(chalk.red("AUTH0"));
  auth0Configuration(function(){
    console.log(arguments);

    var status = new Spinner('Configurando...');
    status.start();
  });
});



function firebaseConfiguration(callback) {
  var questions = [
    {
      name: 'apikey',
      type: 'input',
      message: 'Ingrese la API KEY de Firebase:',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Ingrese la API KEY';
        }
      }
    },
    {
      name: 'authdomain',
      type: 'input',
      message: 'Ingrese el AUTH DOMAIN de Firebase:',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Ingrese el AUTH DOMAIN';
        }
      }
    },
    {
      name: 'databaseurl',
      type: 'input',
      message: 'Ingrese la DATABASE URL de Firebase:',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Ingrese la DATABASE URL';
        }
      }
    },
    {
      name: 'projectid',
      type: 'input',
      message: 'Ingrese el PROJECT ID de Firebase:',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Ingrese el PROJECT ID';
        }
      }
    },
    {
      name: 'storagebucket',
      type: 'input',
      message: 'Ingrese el STORAGE BUCKET de Firebase:',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Ingrese el STORAGE BUCKET';
        }
      }
    },
    {
      name: 'messagingsenderid',
      type: 'input',
      message: 'Ingrese el MESSAGING SENDER ID de Firebase:',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Ingrese el MESSAGING SENDER ID';
        }
      }
    }
  ];

  inquirer.prompt(questions).then(callback);
}

function auth0Configuration(callback) {
  var questions = [
    {
      name: 'domain',
      type: 'input',
      message: 'Ingrese el DOMAIN de AUTH0:',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Ingrese el DOMAIN';
        }
      }
    },
    {
      name: 'clientid',
      type: 'input',
      message: 'Ingrese el CLIENT ID de AUTH0:',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Ingrese el CLIENT ID';
        }
      }
    },
    {
      name: 'realm',
      type: 'input',
      message: 'Ingrese el REALM de AUTH0',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Ingrese la REALM';
        }
      }
    },
    {
      name: 'target',
      type: 'input',
      message: 'Ingrese el TARGET (delegacion) de AUTH0',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Ingrese el TARGET';
        }
      }
    }
  ];

  inquirer.prompt(questions).then(callback);
}
