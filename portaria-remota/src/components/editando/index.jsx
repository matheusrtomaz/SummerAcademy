import { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router'; // Certifique-se de importar corretamente
import { VisitasContext } from '../../context/VisitasContext';

export default function Editando() {
    const { state } = useLocation(); // Recebe os dados da visita selecionada
    const { editarVisita } = useContext(VisitasContext);
    const navigate = useNavigate();

    // Estado local para os campos editáveis
    const [nome, setNome] = useState(state?.nome || '');
    const [data, setData] = useState(state?.data || '');
    const [hora, setHora] = useState(state?.hora || '');
    const [tipoDocumento, setTipoDocumento] = useState(state?.tipoDocumento || '');
    const [numeroDocumento, setNumeroDocumento] = useState(state?.numeroDocumento || '');
    const [observacao, setObservacao] = useState(state?.observacao || '');

    const handleSalvar = () => {
        // Cria um objeto com os dados atualizados
        const visitaEditada = {
            nome,
            data,
            hora,
            tipoDocumento,
            numeroDocumento,
            observacao,
        };

        // Chama a função de editar visita do contexto
        editarVisita(state.index, visitaEditada);

        // Volta para a tela de listagem
        navigate('/');
    };

    return (
        <div>
            <h2>Editando Visita</h2>
            <form>
                <div>
                    <label>Nome do visitante:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Data:</label>
                    <input
                        type="date"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Hora:</label>
                    <input
                        type="time"
                        value={hora}
                        onChange={(e) => setHora(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Tipo de documento:</label>
                    <input
                        type="text"
                        value={tipoDocumento}
                        onChange={(e) => setTipoDocumento(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Número do documento:</label>
                    <input
                        type="text"
                        value={numeroDocumento}
                        onChange={(e) => setNumeroDocumento(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Observação (opcional):</label>
                    <textarea
                        value={observacao}
                        onChange={(e) => setObservacao(e.target.value)}
                    />
                </div>
                <button type="button" onClick={handleSalvar}>
                    Salvar
                </button>
                <button type="button" onClick={() => navigate('/')}>
                    Cancelar
                </button>
            </form>
        </div>
    );
}