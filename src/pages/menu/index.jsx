import './index.scss';
import HeaderMenus from '../../components/headerMenus';
import FooterMenus from '../../components/footerMenus';
import BotoesMenu from '../../components/botoesMenu';
import botoesElementos from './componentsElements.js';

export default function Menu() {

    return (
        <div className='pagina-menu'>

            <HeaderMenus />

            <div className='corpo'>
                <h2>Seus Gerenciamentos</h2>

                    <div className='botoes'>
                        {botoesElementos.slice(0, 3).map((item, index) => (
                            <BotoesMenu
                                key={index}
                                titulo={item.titulo}
                                texto={item.texto}
                                image={item.image}
                                link={item.link}
                            />
                        ))}
                    </div>
                    <div className='botoes'>
                        {botoesElementos.slice(3, 5).map((item, index) => (
                            <BotoesMenu
                                key={index + 3}
                                titulo={item.titulo}
                                texto={item.texto}
                                image={item.image}
                                link={item.link}
                            />
                        ))}
                    </div>

            </div>

            <FooterMenus />

        </div>

    );
}