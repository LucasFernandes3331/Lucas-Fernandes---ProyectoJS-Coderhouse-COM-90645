const bebidas = ["Agua", "Jugo", "Gaseosa"];
const valores = [600, 750, 1500];
let total = 0;

function mostrarBebidas() {
  alert(`Productos disponibles:
    1- Agua
    2- Jugo
    3- Gaseosa`);
}

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

function iniciarTienda() {
  alert("¡Bienvenido!, ¿desea comprar una bebida?");

  let continuar = true;

  while (continuar) {
    mostrarBebidas();
    elegirBebidas();

    continuar = confirm("¿Querés comprar otro producto?");
  }

  alert("Gracias por tu compra. Total gastado: $" + total);
  console.log("Compra finalizada. Total: $" + total);
}

iniciarTienda();
