// <------------------------ Api de mercado pago ------------------------>
async function generarLinkDePago() {
  const productsToMP = carrito.map((element) => {
    let nuevoElemento = {
      title: element.nombre,
      description: element.descripcion,
      picture_url: element.img,
      category_id: element.id,
      quantity: Number(element.cantidad),
      currency_id: "ARS",
      unit_price: Number(element.precio),
    };
    return nuevoElemento;
  });
  const response = await fetch(
    "https://api.mercadopago.com/checkout/preferences",
    {
      method: "POST",
      headers: {
        Authorization:
          "Bearer TEST-680675151110839-052307-64069089337ab3707ea2f547622a1b6a-60191006",
      },
      body: JSON.stringify({
        items: productsToMP,
      }),
    }
  );
  const data = await response.json();
  window.open(data.init_point, "_blank");
}