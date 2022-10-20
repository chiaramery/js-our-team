/*
    Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
    Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
*/

// Creao l’array di oggetti con le informazioni fornite
const arrayTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
    },
]

const infoPeople = document.querySelector(".information");

// Stampo su console le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < arrayTeam.length; i++) {
    const infoTeam = arrayTeam[i];
    console.log(infoTeam.nome, infoTeam.ruolo, infoTeam.foto);

    // Stampo informazioni su DOM sottoforma di stringhe
    infoPeople.innerHTML += `<li><img src="img/${infoTeam.foto}" alt=""><div class = "info"><h3>${infoTeam.nome}</h3> <br>${infoTeam.ruolo}</div></li>`; 
}

