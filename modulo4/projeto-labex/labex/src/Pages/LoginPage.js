import {useNavigate} from "react-router-dom"
import axios from "axios";
import {UseForm} from "../hooks/useForms"
import {BASE_URL} from "../constants/constants"

function LoginAdm (){
    //navegação
    const navigate = useNavigate();
    const login = () => {
        navigate("/login/adm")
      }
    const lastPage = () => {
        navigate(-1)
      }
    // API para acesso ao administrativo
    const [body, onChange, clear]=UseForm({email:"",password:"",})

    const fazerLogin = (event) => {
      event.preventDefault()
      axios.post(`${BASE_URL}login`, body).then((response)=>
      {console.log(response.data);login()})
      .catch((erro)=>
      {console.log("deu erro"); alert("Acesso invalido!")})

      clear();
  }
  


    return(

        <>
        <p>LoginAdm</p>
        <h3>Para fazermos login como administrador</h3>

        <form onSubmit={fazerLogin}>
            <label htmlFor="email">Email:</label>
            <input
                id="email"
                name="email"
                placeholder="E-mail"
                value={body.email}
                onChange={onChange}
                required
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                
            />
            <label htmlFor="password">Senha:</label>
            <input
                id="password"
                name="password"
                placeholder="Senha"
                value={body.password}
                onChange={onChange}
                required
                type="password"
                pattern="^.{6}"
            />
            <button  >Login</button>
            </form>
        <button onClick={lastPage}>Voltar</button>
        </>
    )
}

export default LoginAdm;