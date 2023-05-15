// assets
import add from '../../assets/icons/add.svg'
import edit from '../../assets/icons/edit.svg'

const Icon = ({ category }) => {
  const icons = {
    Add: add,
    Edit: edit,
  }

  return (
    <img className="icon" src={icons[category]} alt={`A ${category} icon.`} />
  )
}

export default Icon