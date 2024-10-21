import './index.scss'

export default function Footer() {
    return(

        <div className='pagina-footer'>
            <div className='conteudo'>
                <h2>Entre em contato: </h2>

                <div className='redes'>
                    <div>
                        <img src="/assets/images/logoInstagram.png" alt="" />
                        <p>@verdeflor.jardim</p>
                    </div>
                    <div>
                        <img src="/assets/images/logoFacebook.png" alt="" />
                        <p>VerdeFlor</p>
                    </div>
                    <div>
                        <img src="/assets/images/logoWhatsapp.png" alt="" />
                        <p>11 91234-5678</p>
                    </div>
                </div>
            </div>
        </div>

    );
}