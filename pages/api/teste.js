async function teste(request, response) {
  let simbolo = request.body.simbol;

  const viaCepResponse = await fetch(
    `https://api.hgbrasil.com/finance/stock_price?key=3a362b98&symbol=${simbolo}`
  );
  const viaCepResponseJson = await viaCepResponse.json();

  response.json({
    response: viaCepResponseJson,
  });
}

export default teste;
