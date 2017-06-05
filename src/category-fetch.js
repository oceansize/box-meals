const callAPI = () => {
  let url = "https://api.gousto.co.uk/products/v2.0/categories";

  fetch(url)
    .then(data => data.json() )
    .then(res => console.log(res.data[0].title) )
    .catch(() => {
      console.log('summat fucked up');
    });
};


export callAPI
