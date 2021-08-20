const {ipcRenderer, shell} = require('electron');
const process = require('process');

let linkFechar = document.querySelector("#link-fechar");
let linkGithub = document.querySelector("#link-github");
let versaoElectron = document.querySelector('#versao-electron');

window.onload = function(){
  versaoElectron.textContent = process.versions.electron;
}

linkGithub.addEventListener('click', function(){
  shell.openExternal("https://www.github.com/raphaelnunes67");
});

linkFechar.addEventListener('click', function(){
  ipcRenderer.send('fechar-janela-sobre');
});