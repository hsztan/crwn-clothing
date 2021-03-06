import './menu-item.styles.scss'
import { withRouter } from 'react-router'

const MenuItem = ({
  title,
  subtitle,
  imageUrl,
  size,
  linkUrl,
  history,
  match,
}) => {
  return (
    <div
      className={size ? `menu-item ${size}` : 'menu-item'}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem)
