async function teste(request, response) {
  let simbolo = request.body.simbol;

  const viaCepResponse = await fetch(
    `https://cotacao.b3.com.br/mds/api/v1/InstrumentQuotation/${simbolo}`
    //`https://api.hgbrasil.com/finance/stock_price?key=330d3dad&symbol=${simbolo}`
  );
  const viaCepResponseJson = await viaCepResponse.json();

  response.json({
    response: viaCepResponseJson,
  });
}

export default teste;
