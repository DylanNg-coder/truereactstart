import "./Useroutput.css";
const Useroutput = (props) =>{
    return(
        <div className="userOutput">
            <p>Hello {props.name}</p>
        </div>
    )
}
export default Useroutput;