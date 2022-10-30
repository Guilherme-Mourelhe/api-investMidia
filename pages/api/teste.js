async function teste(request, response) {
  let simbolo = request.body.simbol;

  const viaCepResponse = await fetch(
    `https://api.hgbrasil.com/finance/stock_price?key=a97842bb&symbol=${simbolo}`
  );
  const viaCepResponseJson = await viaCepResponse.json();

  response.json({
    response: viaCepResponseJson.response,
  });
}

export default teste;
