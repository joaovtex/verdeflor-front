import './index.scss'

export default function UltimosServCards(props) {
    return(

        <div className='component-uservs'>
            <h3>{props.titulo}</h3>
            <img src={props.image} alt="" />
        </div>

    );
}