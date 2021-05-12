import './assets/style.css';
import postmanImg from './assets/imgs/postman.png';

const Navbar=()=>{
    return(
        <>
            <div className="nav">
                <img src={postmanImg} alt="postman" className="postman" />
            </div>
        </>
    )
}
export default Navbar;