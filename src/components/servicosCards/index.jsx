import './index.scss'

export default function ServicosCards(props) {
    return(

        <div className='component-servicoscards'>
            <div className='backimg' style={{backgroundImage: `url(${props.image})`}}></div>
            <p>{props.titulo}</p>
        </div>

    );
}