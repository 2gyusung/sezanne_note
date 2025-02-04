import { Store } from '../core/coreMovie';

const store = new Store({
  searchText : '',
  page : 1,
  movies : []
})

export default store;
export const searchMovies = async (page) => {
  if(page === 1) {
    store.state.page = 1;
    store.state.movies = [];
  }
  const  res =  await fetch(`http://www.omdbapi.com/?apikey=24ec2a28&s=${store.state.searchText}&page=${page}`)
  const {Search} = await res.json()
  console.log('api', Search);
  store.state.movies = [
    ...store.state.movies,
    ...Search
  ]
  // console.log(store.state.movies);
  
}