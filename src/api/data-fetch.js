import request from './request';

function dataFetch (endpoint) {
  let url = `https://api.gousto.co.uk/products/v2.0/${endpoint}`;
  return request(url)
    .then(response  => {
    return response.entity.data;
  });
}

export { dataFetch };
