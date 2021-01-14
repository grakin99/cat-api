/**
 * @method httpRequest
 * @param url url of the data
 * */

const httpGetRequest = (url) => {
  const request = fetch(url)
    .then((res) => res.json())
    .then((result) => result);
  return request;
};

export { httpGetRequest };
