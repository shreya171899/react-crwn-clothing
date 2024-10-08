import { Link } from "react-router-dom";
import "./DirectoryItem.scss";
const DirectoryItem = ({ category }) => {

    const { imageUrl, title } = category;


    return (
        <div className='directory-item-container'>
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='body'>
                <Link to={`/shop/${title.toLowerCase()}`}>
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </Link>
            </div>
        </div>
    )
}

export default DirectoryItem