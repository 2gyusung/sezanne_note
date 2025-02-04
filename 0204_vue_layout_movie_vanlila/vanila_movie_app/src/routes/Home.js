import HeadLine from '../components/HeadLine'
import MovieList from '../components/MovieList';
import Search from '../components/Search';
import { Componet } from '../core/coreMovie'

export default class Home extends Componet {
  render() {
    const headLine = new HeadLine().el;
    const search = new Search().el
    const movieList = new MovieList().el
    this.el.classList.add('container')
    this.el.append(
      headLine,
      search,
      movieList
    )
  }
}