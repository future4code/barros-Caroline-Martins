import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemCarol from './components/ImagensCarol/foto-carol.jpg'
import ImagemEmail from './components/ImagensCarol/Icone-email.png';
import CardPequeno from './components/Pasta/CardPequeno';
import ImagemEndereco from './components/ImagensCarol/icone-endereco.png'
import ImagemExperiencia from './components/ImagensCarol/imag-experiencia.png'
import ImagemFarmacia from './components/ImagensCarol/logo-farmacia.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemCarol} 
          nome="Caroline Martins" 
          descricao="Oi, eu sou Carol extrovertida gosto de trabalhar em equipe e estudar dou meu melhor em cada novo projeto. Apaixonada por café."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>
      <div className='email'>
        <CardPequeno
          imagemEmail={ImagemEmail}
          email={"CarolMartins@labenu.com"}
          />
        <CardPequeno
          ImagemEndereco={ImagemEndereco}
          endereco={"Florianópolis Santa Catarina"}
          />

      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={ImagemExperiencia} 
          nome="Administrativo" 
          descricao="Gestão de pessoas, olhando com empatia e gerando resultados." 
        />
        
        <CardGrande 
          imagem={ImagemFarmacia}
          nome="Laboratório farmacêutico" 
          descricao="Gestão e controle de qualidade com os melhores nos ramo." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
