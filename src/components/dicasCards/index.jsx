import './index.scss'

export default function DicasCards(props) {
    return (

        <div className='component-dicasCards'>

            <ul><li>{props.titulo}</li></ul>

            <p>{props.conteudo}</p>

        </div>

    );
}