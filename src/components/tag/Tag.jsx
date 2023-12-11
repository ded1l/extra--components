/* eslint-disable react/prop-types */
import "./tag.css"
const Tag = ({children, color,}) => {
  return (
    <div>
        <div className="tag" style={{ backgroundColor: color}}>
      {children}
    </div>
    </div>
  )
}

export default Tag
