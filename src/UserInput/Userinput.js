import "./Userinput.css"
const Userinput = (props) =>{
    return(
        <div className = "input">
            <input type = "text" onChange={props.changed} value={props.currentName}></input>
        </div>
    )
}
export default Userinput;