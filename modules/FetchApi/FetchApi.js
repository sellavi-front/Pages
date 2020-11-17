export default class FetchApi {
  constructor(url, headers) {
    this.url = url;
    this.headers = headers;
  }

  async getData() {
    try {
      const result = await fetch(this.url, this.headers);
      const data = await result.json();

      return data;
    } catch (e) {
      console.log('При загрузке данных произошла ошибка -->', e);
      return e;
    }
  }
}

// let headers = {
// method: 'GET',
// mode: 'cors',
// headers: {
// 'Accept': 'application/json',
// 'x-token': '0fbdfb-5ceef5-84eac4-f6487c-ac7226',
// };
