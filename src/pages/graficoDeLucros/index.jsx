import './index.scss'
import { useEffect, useState } from 'react'
import './index.scss'
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
    const [val, setVal] = useState()

    useEffect(() => {
        buscar()
    }, [])

    const dados = [
        { mes: 'Jan', vendas: totalOrcamentoPorMes.mes_1 },
        { mes: 'Fev', vendas: totalOrcamentoPorMes.mes_2 },
        { mes: 'Mar', vendas: totalOrcamentoPorMes.mes_3 },
        { mes: 'Abr', vendas: totalOrcamentoPorMes.mes_4 },
        { mes: 'Mai', vendas: totalOrcamentoPorMes.mes_5 },
        { mes: 'Jun', vendas: totalOrcamentoPorMes.mes_6 },
        { mes: 'Jul', vendas: totalOrcamentoPorMes.mes_7 },
        { mes: 'Ago', vendas: totalOrcamentoPorMes.mes_8 },
        { mes: 'Set', vendas: totalOrcamentoPorMes.mes_9 },
        { mes: 'Out', vendas: totalOrcamentoPorMes.mes_10 },
        { mes: 'Nov', vendas: totalOrcamentoPorMes.mes_11 },
        { mes: 'Dez', vendas: totalOrcamentoPorMes.mes_12 }
    ]

    async function buscar() {
        try {
            let token = localStorage.getItem('TOKEN')

            let resp = await axios.get(`${API_URL}/listar/faturamento-anual`,
                {
                    headers: { 'x-access-token': token }
                }
            )

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
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="vendas" fill="#284729" />
                    </BarChart>
                </ResponsiveContainer>

            </div>

            <FooterMenus />

        </div>

    );
}