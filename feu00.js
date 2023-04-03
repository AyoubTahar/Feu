if (process.argv.length !== 4) {
  console.error("pb argument");
  process.exit(1);
}
let caractere = process.argv[2];
let nombre = process.argv[3];

function check(arg1, arg2) {
  if (Number(arg1) > 0 && Number(arg2) > 0) {
    return true;
  }
}
function Forme(collone, ligne) {
  if (check) {
    for (let i = 0; i < ligne; i++) {
      if (i == 0) {
        let longeur = "o";
        for (let j = 0; j < collone - 2; j++) {
          longeur += "-";
        }
        if (collone > 1) {
          longeur += "o";
          console.log(longeur);
        }
        console.log(longeur);
      }
      if (i == ligne - 1 && i > 1) {
        let longeur = "o";
        for (let j = 0; j < collone - 2; j++) {
          longeur += "-";
        }
        if (collone > 1) {
          longeur += "o";
          console.log(longeur);
          break;
        }
        console.log(longeur);
        break;
      }
      if (i > 0 && i < ligne) {
        let longeur = "|";
        for (let j = 0; j < collone - 2; j++) {
          longeur += " ";
        }
        if (collone > 1) {
          longeur += "|";
          console.log(longeur);
        }
        console.log(longeur);
      }
    }
  } else {
    {
      console.error("pb argument");
      process.exit(1);
    }
  }
}

Forme(caractere, nombre);
