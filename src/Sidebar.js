import { Link } from "react-router-dom";

const Sidebar=()=>{

    return(
        <>
            <div className="sidebar">
                <h3>TEMP</h3>
                <ul>
                    <li>Introduction</li>
                    <li>Model2 : Role</li>
                </ul>
                <div className="role-dir">
                    <div className="play-icon">
                        <Link to="/" className="icon-btn" id="btn"><i className="fa fa-play icon-color"></i></Link>
                        <i class="fa fa-folder icon-btn"> </i><span className="txt icon-btn"> Role</span>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Sidebar;