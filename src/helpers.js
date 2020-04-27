export const revisarPresupuesto = ( presupuesto, restante ) => {
  let clase;
  const a25 = presupuesto * .25;
  const a50 = presupuesto * .50;

  if (restante < a25){
    clase = "alert alert-danger"
  }else if (restante < a50) {
    clase = "alert alert-warning"
  }else {
    clase = "alert alert-success"
  }

  return clase;
}