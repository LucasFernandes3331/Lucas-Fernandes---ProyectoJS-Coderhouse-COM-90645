// declarando variables (let y const).
const bebidas = ["Agua", "Jugo", "Gaseosa"];
const valores = [600, 750, 1500];
let total = 0;

//function para mostrar las bebidas disponibles.
function mostrarBebidas() {
  alert(`Productos disponibles:
    1- Agua
    2- Jugo
    3- Gaseosa`);
}

// function para realizar una switch case con las distintas elecciones posibles del usuario.
function elegirBebidas() {
  let opciones = prompt("¿Qué gaseosa querés comprar?, Seleccione: 1, 2 o 3");

  switch (opciones) {
    case "1":
      total += valores[0];
      alert("Seleccionaste AGUA por $600");
      break;
    case "2":
      total += valores[1];
      alert("Seleccionaste JUGO por $750");
      break;
    case "3":
      total += valores[2];
      alert("Seleccionaste GASEOSA por $1500");
      break;
    default:
      alert("Bebida no encontrada, vuelve a intentarlo.");
      break;
  }

  console.log("Total: $" + total);
}

// function para darle un inicio a la tienda, esto es lo primero que se va a mostrar.
function iniciarTienda() {
  alert("¡Bienvenido!, ¿desea comprar una bebida?");

// variable para determinar el bucle de toda la "tienda de bebidas".
  let continuar = true;

  while (continuar) {
    mostrarBebidas();
    elegirBebidas();

    continuar = confirm("¿Querés comprar otro producto?");
  }

//finalizando la compra.
  alert("Gracias por tu compra. Total gastado: $" + total);
  console.log("Compra finalizada. Total: $" + total);
}

iniciarTienda();
