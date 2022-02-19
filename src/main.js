import { gender, medals, sports, team} from './data.js';
import athletes from './data/athletes/athletes.js';
import generatorTable from './utils/generatorTable.js'

let article = document.getElementById("newTable");

// Desplegar filtro de deportes
function showSportFilter() {
    let arraySport = sports().sort(); 
    let selectSport = document.getElementById("selectSport"); //Seleccionamos el select
        for(let i=0; i < arraySport.length; i++){
            let optionSport = document.createElement("option"); //Creamos la opcion
            optionSport.innerHTML = arraySport[i];
            optionSport.value = arraySport[i]; //Metemos el texto en la opción
            selectSport.appendChild(optionSport); //Metemos la opción en el select
        } 
}
    showSportFilter();

// Desplegar filtro de Medallas
function showMedalsFilter() {
    let arrayMedal = medals().reverse(); 
    let selectMedal = document.getElementById("selectMedal");
        for(let i=0; i < arrayMedal.length; i++){
            let optionMedal = document.createElement("option"); 
            optionMedal.innerHTML = arrayMedal[i];
            optionMedal.value = arrayMedal[i]; 
            selectMedal.appendChild(optionMedal); 
        }
}
    showMedalsFilter();

// Desplegar filtro de Género
function showGenderFilter() {
   let arrayGender = gender().sort(); 
   let selectGender = document.getElementById("selectGender"); 
        for(let i=0; i < arrayGender.length; i++){
            let optionGender = document.createElement("option"); 
            optionGender.innerHTML = arrayGender[i];
            optionGender.value = arrayGender[i]; 
            selectGender.appendChild(optionGender); 
        }
}
    showGenderFilter();

// Desplegar filtro de Países
function showTeamFilter() {
    let arrayTeam = team().sort(); 
    let selectTeam = document.getElementById("selectTeam"); 
        for(let i=0; i < arrayTeam.length; i++){
            let optionTeam = document.createElement("option"); 
            optionTeam.innerHTML = arrayTeam[i];
            optionTeam.value = arrayTeam[i]; 
            selectTeam.appendChild(optionTeam); 
        }
 }
    showTeamFilter();

// Activar evento Onclick en botón Buscar
function clickSearch(){
    let chosenSport = document.getElementById("selectSport").value;
    let chosenMedal = document.getElementById("selectMedal").value;
    let chosenGender = document.getElementById("selectGender").value;
    let chosenTeam = document.getElementById("selectTeam").value;
    let filterData=athletes.athletes;
        if(chosenSport != ""){
            filterData = filterData.filter(function (athlete) {
            return athlete.sport == chosenSport;
            });
        }
        if(chosenMedal != ""){
            filterData = filterData.filter(function (athlete) {
            return athlete.medal == chosenMedal;
            });
        }
        if(chosenGender != ""){
            filterData = filterData.filter(function (athlete) {
            return athlete.gender == chosenGender;
            });        
        }
        if(chosenTeam != ""){
            filterData = filterData.filter(function (athlete) {
            return athlete.team == chosenTeam;
            });
        }

        if(filterData.length == 0){
            document.getElementById("emptyFilterMessage").innerText = "No se encontró información de esta búsqueda";
            document.getElementById("tbOlimpics").style.display = "none"; 
        }
        else{
            document.getElementById("emptyFilterMessage").innerText = "";
            showTable();
        } 
    generateTableContent(filterData);
    return chosenSport + chosenMedal + chosenGender + chosenTeam;
}
    window.clickSearch=clickSearch;

function showTable() {
    article.innerHTML=generatorTable()
}

function generateTableContent(filterData){
    let table = document.getElementById("tbOlimpics");
        filterData.forEach((athlete)=>{
            let row = table.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);
            let cell6 = row.insertCell(5);
            let cell7 = row.insertCell(6);
            cell1.innerHTML = athlete.event;
            cell2.innerHTML = athlete.medal;
            cell3.innerHTML = athlete.name;
            cell4.innerHTML = athlete.gender;
            cell5.innerHTML = athlete.age;
            cell6.innerHTML = athlete.weight;
            cell7.innerHTML = athlete.height;
        });
}