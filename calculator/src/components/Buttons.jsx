/* eslint-disable react/prop-types */
import ButtonContainer from "./ButtonContainer";
import Button from "./Button";
export default function Buttons({clickHandler}){
    const button_list = [
        'AC','1','2',
        '+','3','4',
        '-','5','6',
        '*','7','8',
        '/','9','0',
        '=','.'
    ];
    return(
        <ButtonContainer>
            { button_list.map(button=> <Button key={button} text={button} clickHandler={clickHandler}></Button>)}
        </ButtonContainer>
    )
}