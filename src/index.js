// desafio

const nomeHeroi = "Homem de Ferro";
let xp = 50000;

function classificarNivel() {
  let nivel;

  switch (true) {
    case xp >= 10001:
      nivel = "radiante";
      break;

    case xp >= 9001:
      nivel = "imortal";
      break;

    case xp >= 8001:
      nivel = "ascendente";
      break;

    case xp >= 7001:
      nivel = "platina";
      break;

    case xp >= 5001:
      nivel = "ouro";
      break;

    case xp >= 2001:
      nivel = "prata";
      break;

    case xp >= 1001:
      nivel = "bronze";
      break;

    default:
      nivel = "ferro";
      break;
  }

  return nivel
}

const nivel = classificarNivel(xp)
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);