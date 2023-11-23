/* eslint-disable react/prop-types */
export default function Button({text,clickHandler}){
    return(
        <button className="btn" onClick={()=>{clickHandler(text)}}>{text}</button>
    )
}