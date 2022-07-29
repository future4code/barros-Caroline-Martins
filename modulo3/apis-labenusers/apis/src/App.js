import axios from "axios";
import {useState, useEffect} from "react"
import "./App.css"

function App() {
  //estado
  const [listaCadastro, setListaCadastro] = useState([]);
  const [input, setInput] = useState("");
  const [inputEmail,setInputEmail] = useState("");

  //captura input
  const atualiza = (event) => {
    setInput(event.target.value);
  };
  const atualizaEmail=(event)=>{
    setInputEmail(event.target.value)
  }
 
//get
const url="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const header={
  headers: {
    Authorization: "caroline-martins-barros"
  }
}
const getUser = () => {
  axios
    .get(url, header)
    .then((response) => {
      setListaCadastro(response.data);
      console.log(response.data);
    })
    .catch((erro) => {
      console.log(erro.response);
      console.log(erro.response)
    });
};
  


const cadastro = (event) => {
  event.preventDefault();
  axios
    .post(url,body, header)
    .then(() => {alert("Cadastro realizado com sucesso!");
      getUser();
    })
    .catch((erro) => {alert("Vou um erro no cadastro!");
      console.log(erro.response);
    });
  setInput("")
  setInputEmail("");
};



const body = {
  name: input,
  email:inputEmail
};
console.log(body)

useEffect(() => {getUser();}, []);



const excluir = (event) => {
  event.preventDefault();
  const excluirUsuario = listaCadastro.filter(
    (item) => item.name === item.name
  );
  console.log(excluirUsuario.id);
  
  axios
    .delete(url+ "/" + excluirUsuario.id, header)
    .then((response) => {alert("Usuário deletado com sucesso!");
      getUser();
    })
    .catch((erro) => {alert("Tente novamente!");
      console.log(erro.response);
    });
  setInput("");
  setInputEmail("")
};

  return (
    <div >
      <header >
        <h3>Cadastro Usuário </h3>

        {listaCadastro.map((item , index) => {
           return <div>
                    <li key={item.id}>{item.name}</li> <button onClick={excluir}>X</button>
                         <>{index.email}</>
                  </div>
        })}
      
      <form>
        <input type="text" value={input} onChange={atualiza} placeholder="Nome"/>
        <input type="text" value={inputEmail} onChange={atualizaEmail} placeholder="Email"/>
        <button onClick={cadastro}>Adicionar</button>
      </form>

      </header>
    </div>
  );
}

export default App;
