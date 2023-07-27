import './index.css'

const TabItem = props => {
  const {tabDetails} = props

  const {displayText} = tabDetails
  return (
    <li className="listEdit">
      <h2>{displayText}</h2>
    </li>
  )
}

export default TabItem
