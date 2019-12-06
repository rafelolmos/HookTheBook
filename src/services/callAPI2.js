import axios from 'axios'

class API {
    constructor(apiBaseURL) {
      this.apiBase = apiBaseURL;
    }
  
    async get(url, codeISBN) {
      const result = await axios.get(this.apiBase + url, codeISBN)
      
      if (result.status === 200) {
        return result.data;
      }
    }
  }
  
  export default API;

      // const BookISBNSearchAxios = axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${codeISBN}`)
//   .then(function (response) {
//     const bookItem = response.data.items[0].volumeInfo.imageLinks.thumbnail;
//     console.log('bookItem: ', bookItem);
//   }
// )