import axios from "axios";
import { useNavigate } from "react-router-dom"
import { useForm } from "../hooks/useForms"
import { BASE_URL } from "../constants/constants"

function FormAdm() {
    //navegacao
    const navigate = useNavigate();
    const lastPage = () => {
        navigate(-1)
    }
    // hooks form
    const [form, onChange, clear] = useForm({
        "name": "",
        "planet": "",
        "date": "",
        "description": "",
        "durationInDays": "",
    })

    //Esse endpoint cria uma nova viagem.
    const createTrip = () => {
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays,
        }
        const Header={
            headers:{
                auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0"
            }
        }
        axios.post(`${BASE_URL}trips`, body,Header)
            .then((response) => { alert("Requisição realizada com SUCESSO!"); })
            .catch((erro) => { console.log(erro) })
    }
        // acao formulario
        const onClickCreate = (event) => {
            event.preventDefault()
            createTrip()
            clear()
        }
        return (
            <>
                <p>FormAdm</p>
                <h3> Formulário para o administrador criar uma nova viagem</h3>
                <form onSubmit={onClickCreate}>

                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        placeholder="Nome"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        required
                        pattern={"^.{6,}"}
                    >
                    </input>

                    <label htmlFor="planet">Planeta:</label>
                    <select
                        id="planet"
                        type="select"
                        name="planet"
                        value={form.planet}
                        onChange={onChange}
                        placeholder="Planeta"
                        required
                    >
                        <option value="Mercurio">Mercúrio</option>
                        <option value="Venus">Vênus</option>
                        <option value="Terra">Terra</option>
                        <option value="Marte">Marte</option>
                        <option value="Jupiter">Júpiter</option>
                        <option value="Saturno">Saturno</option>
                        <option value="Urano">Urano</option>
                        <option value="Netuno">Netuno</option>
                    </select>

                    <label htmlFor="date">Data:</label>
                    <input
                        type="date"
                        min={"2023-01-01"}
                        id="date"
                        name="date"
                        value={form.date}
                        onChange={onChange}
                        required
                    >
                    </input>

                    <label htmlFor="descricao">Descrição viagem:</label>
                    <input
                        type="text"
                        id="descricao"
                        name="description"
                        value={form.description}
                        onChange={onChange}
                        placeholder="Descrição"
                        required
                        pattern={"^.{30,}"}
                    >
                    </input>

                    <label htmlFor="durationInDays">Duração em dias</label>
                    <input
                        type="number"
                        min={50}
                        id="durationInDays"
                        name="durationInDays"
                        value={form.durationInDays}
                        onChange={onChange}
                        placeholder="Duração viagem"
                        required
                    >
                    </input>
                    <button>Criar viagem</button>
                </form>

                <button onClick={lastPage}>Voltar</button>
            </>
        )

    

}
export default FormAdm;