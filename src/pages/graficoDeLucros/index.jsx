import './index.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import HeaderMenus from '../../components/headerMenus'
import FooterMenus from '../../components/footerMenus'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../api/constants'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function GraficoDeLucros() {
    const navigate = useNavigate()
    const [lista, setLista] = useState([])
    const [totalOrcamentoPorMes, setTotalOrcamentoPorMes] = useState({});

    useEffect(() => {
        buscar()
    }, [])

    const dados = [
        { mes: 'Jan', Lucro: totalOrcamentoPorMes.mes_1 },
        { mes: 'Fev', Lucro: totalOrcamentoPorMes.mes_2 },
        { mes: 'Mar', Lucro: totalOrcamentoPorMes.mes_3 },
        { mes: 'Abr', Lucro: totalOrcamentoPorMes.mes_4 },
        { mes: 'Mai', Lucro: totalOrcamentoPorMes.mes_5 },
        { mes: 'Jun', Lucro: totalOrcamentoPorMes.mes_6 },
        { mes: 'Jul', Lucro: totalOrcamentoPorMes.mes_7 },
        { mes: 'Ago', Lucro: totalOrcamentoPorMes.mes_8 },
        { mes: 'Set', Lucro: totalOrcamentoPorMes.mes_9 },
        { mes: 'Out', Lucro: totalOrcamentoPorMes.mes_10 },
        { mes: 'Nov', Lucro: totalOrcamentoPorMes.mes_11 },
        { mes: 'Dez', Lucro: totalOrcamentoPorMes.mes_12 }
    ]

    async function buscar() {
        try {
            let token = localStorage.getItem('TOKEN')

            let resp = await axios.get(`${API_URL}/listar/faturamento-anual`, {
                headers: { 'x-access-token': token }
            })

            setLista(resp.data)

            let totalOrcamentoPorMes = {};

            resp.data.forEach(item => {
                totalOrcamentoPorMes[`mes_${item.mes}`] = item.total_orcamento;
            });

            setTotalOrcamentoPorMes(totalOrcamentoPorMes);

        } catch (error) {
            alert('Erro ao buscar serviço: ' + error.response.data.erro)
        }
    }

    const formatarMoeda = (valor) => {
        if (valor) {
            return `R$ ${valor.toFixed(2).replace('.', ',')}`;
        }
        return 'R$ 0,00';
    };

    return (
        <div className='pagina-funcionariosAlocados'>
            <HeaderMenus />

            <div className='voltarTitulo'>
                <img
                    src="/assets/images/botao-voltar.png"
                    onClick={() => navigate(-1)}
                />
                <h2>Lucros de 2024</h2>
            </div>

            <div className='corpo'>
                <ResponsiveContainer width="80%" height={300}>
                    <BarChart data={dados}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="mes" />
                        <YAxis tickFormatter={formatarMoeda} />
                        <Tooltip formatter={formatarMoeda} />
                        <Legend />
                        <Bar dataKey="Lucro" fill="#284729" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <FooterMenus />
        </div>
    );
}
