import './index.scss'
import DicasCards from '../dicasCards';

export default function Dicas() {
    return (

        <div className='pagina-dicas'>
            <div className='dicasJardim'>
                <h1>DICAS PARA O SEU JARDIM</h1>
                <DicasCards titulo="Regue na Hora Certa" conteudo="A melhor hora para regar seu jardim
                 é no início da manhã ou no final da tarde, quando o sol está mais fraco. Isso evita a 
                 rápida evaporação da água e garante que as plantas tenham tempo suficiente para 
                 absorvê-la. Evite regar à noite, pois a umidade pode favorecer o surgimento de fungos." />

                <DicasCards titulo="Faça a Poda Regularmente" conteudo="A poda é essencial para manter 
                as plantas saudáveis e estimular o crescimento. Remova galhos secos ou doentes, e 
                mantenha o formato das plantas podando-as periodicamente. Certifique-se de usar ferramentas
                 afiadas para fazer cortes limpos e evitar danificar as plantas." />

                <DicasCards titulo="Fertilize na Época Certa" conteudo="Para que suas plantas cresçam fortes
                 e saudáveis, é importante aplicar fertilizantes na época certa. A primavera e o início do
                  verão são os melhores momentos para fertilizar a maioria das plantas, quando elas estão 
                  em pleno crescimento. Use fertilizantes orgânicos, como compostagem, para enriquecer o solo com nutrientes essenciais." />
            </div>

            <img src="/assets/images/dicasJardim.png" alt="" />
        </div>

    );
}