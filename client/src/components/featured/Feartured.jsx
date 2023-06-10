import "./featured.scss"
import {InfoOutlined, PlayArrow} from "@mui/icons-material"

export default function Feartured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movies" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img src="https://images.ctfassets.net/usf1vwtuqyxm/33bzsde2lsWi7eO6wVpeUI/0471c76bc4b279213020dfeddc794de8/WW_Mocks_ARTICLE_HERO_3.png?fm=jpg&q=70&w=2560" className="backGround" alt="" />
        <div className="info">
            <img src="https://kids.scholastic.com/content/kids64/en/books/harry-potter/_jcr_content/root/responsivegrid/responsivegrid_copy_/image.coreimg.100.1285.png/1633456741254/header-hp-overlay.png" className="titleImg" alt="" />
            <span className="desc">Series Harry Potter is coming back this week, stay tuned!</span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
