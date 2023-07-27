import './index.css'

const AppItem = props => {
  const {appListDetails} = props
  const {appName, imageUrl} = appListDetails
  return (
    <li className="listEdit2">
      <img className="imgEdit" src={imageUrl} alt={appName} />
      <h2 className="headEdit2">{appName}</h2>
    </li>
  )
}

export default AppItem
