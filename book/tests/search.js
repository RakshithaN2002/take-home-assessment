const axios = require('axios');
const GOOGLE_BOOKS_API_KEY = process.env.GOOGLE_BOOKS_API_KEY;
const query = 'harry potter';

axios.get('https://www.googleapis.com/books/v1/volumes', {
  params: {
    q: query,
    key: GOOGLE_BOOKS_API_KEY
  }
})
  .then(response => {
    const books = response.data.items.map(item => {
      const bookInfo = item.volumeInfo;
      const publisher = bookInfo.publisher || 'Unknown';
      return {
        title: bookInfo.title,
        authors: bookInfo.authors,
        description: bookInfo.description,
        date_published: bookInfo.publishedDate,
        thumbnail: bookInfo.imageLinks?.thumbnail,
        previewLink: bookInfo.previewLink,
        language: bookInfo.language,
        page_count: bookInfo.pageCount || 0,
        publisher,
        ISBN: bookInfo.industryIdentifiers ? bookInfo.industryIdentifiers[0].identifier : null
      };
    });

    console.log('Search Results:');
    console.log(books);
  })
  .catch(error => {
    console.error('Error searching books:', error.message);
  });
