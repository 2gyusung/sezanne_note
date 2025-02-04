import { Componet } from '../core/coreMovie';
import movieStore from '../store/movie'

export default class MovieList extends Componet {
  render () {
    this.el.classList.add('movie-list')
    this.el.innerHTML = /*HTML */`
    <div class="movies"></div>
    `
    const movieEl = this.el.querySelector('.movies')
    movieEl.append(
      movieStore.state.movies.map(movie=> {
        return movie.Title
      })
    )
  }
}