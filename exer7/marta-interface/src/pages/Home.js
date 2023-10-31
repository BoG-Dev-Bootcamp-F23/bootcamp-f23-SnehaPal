import {useNavigate} from "react-router-dom";
import "./Home.css";
export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="homePage">
            <div className="header">
            <button className="aboutPage" 
                onClick={() => (navigate("/About"))}>About Marta</button>
            </div>

            <div className="body">
                <div className="routes">
                        <h1>MARTA</h1>
                        <div className="h2">View Routes Schedule</div>
                        <button onClick={()=>(navigate("/Line/GOLD"))}>Gold Line</button>
                        <button onClick={()=>(navigate("/Line/RED"))}>Red Line</button>
                        <button onClick={()=>(navigate("/Line/BLUE"))}>Blue Line</button>
                        <button onClick={()=>(navigate("/Line/GREEN"))}>Green Line</button>
                </div>
                <img width = "400px"src=""/>
            </div>
        </div>   
    );

}