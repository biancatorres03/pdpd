import { Application } from 'https://unpkg.com/@splinetool/runtime';

export function iniciarCena(urlSpline) {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);

    app.load(urlSpline).then(() => {
        console.log("Cena do Spline carregada com sucesso!");
        

        app.addEventListener('mouseDown', (e) => {

            
            if (e.target.name === 'Manteiga') {
                alert('Errado! Passar manteiga piora a queimadura porque retém o calor.');
                window.responder(false, 'queda.html'); 
            }
            

            if (e.target.name === 'Torneira' || e.target.name === 'Panela') {
                alert('Correto! O ideal é lavar com água corrente fria.');
                window.responder(true, 'queda.html'); 
            }
        });

    }).catch(err => {
        console.error("Erro ao carregar o Spline:", err);
    });
}


window.responder = function(acertou, proximaPagina) {
    let pontos = Number(localStorage.getItem("pontos") || 0);
    if (acertou) pontos++;
    localStorage.setItem("pontos", pontos);
    window.location.href = proximaPagina;
};