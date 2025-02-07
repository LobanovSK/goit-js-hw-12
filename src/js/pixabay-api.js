import axios from 'axios';

export default class Gallery {
  #API_KEY = '48337181-b337d2ddf37a3570ada3a2f89';
  #BASE_URL = 'https://pixabay.com/api/';

  constructor() {
    this.page = 1;
    this.searchQuery = '';
    this.per_page = 15;
  }

  async fetchPictures() {
    const res = await axios.get(this.#BASE_URL, {
      params: {
        key: this.#API_KEY,
        q: this.searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: this.page,
        per_page: this.per_page,
      },
    });

    return res.data;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
