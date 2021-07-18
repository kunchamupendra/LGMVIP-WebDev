import Loader from "react-loader-spinner";
import './App.css';

const Loading= () => {
    return(
        <div className="spinner">
         <Loader type="Circles" color="orangered" height={80} width={80}/>
        </div>
    );
}


export default Loading