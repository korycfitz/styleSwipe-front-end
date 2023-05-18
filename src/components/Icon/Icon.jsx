// assets
import add from '../../assets/icons/add.svg'
import edit from '../../assets/icons/edit.svg'
import news from '../../assets/icons/news.svg'
import like from '../../assets/icons/like.svg'
import liked from '../../assets/icons/liked.svg'
import music from '../../assets/icons/music.svg'
import games from '../../assets/icons/games.svg'
import trash from '../../assets/icons/trash.svg'
import movies from '../../assets/icons/movies.svg'
import sports from '../../assets/icons/sports.svg'
import create from '../../assets/icons/create.svg'
import comments from '../../assets/icons/comments.svg'
import calendar from '../../assets/icons/calendar.svg'
import television from '../../assets/icons/television.svg'

const Icon = ({ category }) => {
  const icons = {
    Add: add,
    News: news,
    Like: like,
    Edit: edit,
    Music: music,
    Games: games,
    Liked: liked,
    Trash: trash,
    Movies: movies,
    Sports: sports,
    Create: create,
    Calendar: calendar,
    Comments: comments,
    Television: television,
  }

  return (
    <img className="icon" src={icons[category]} alt={`A ${category} icon.`} />
  )
}

export default Icon
