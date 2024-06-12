import React from 'react';
import { useState } from 'react';
import '../App.css';
import ImgPerfil1 from '/Users/daniel/amigos_react_pac/src/Amigos em Ação Screenshot Abr 19.png'
import ImgPerfil2 from '/Users/daniel/amigos_react_pac/src/WhatsApp Image 2024-04-19 at 16.30 1.png'
import ImgFeedBack from '/Users/daniel/amigos_react_pac/src/Group 1965.png'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const Home = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    descricao: '',
    anonimo: true,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica para enviar o formulário
    console.log(formData);
  };

  const containerStyle = {
    width: '50%',
    height: '400px',
    margin: '0 auto'
  };

  const center = {
    lat: -26.488872528076172,
    lng: -49.09482955932617
  };
  //add useEffect para responsividade 

  return (
    <div style={{ textAlign: 'center' }}>
      <h4>Equipe Amigos em Ação</h4>
      <h1 className='titulo-poppins' style={{ color: '#2999E7' }}>Mais que voluntários!</h1>

      <p style={{ margin: '0 auto', maxWidth: '740px' }}>
        Nossa equipe é composta por mais de 100 pessoas que se voluntariam para ajudar o público da cidade de Jaraguá do Sul.
        Saiba como é trabalhar conosco e, quem sabe você pode vir fazer parte disso tudo!
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }} >
        <div className="vertical-rectangle">
          <div>
            <img className="profile-img" src={ImgPerfil1} alt="Imagem do perfil" />
            <p className="vertical-text-p" style={{ textAlign: 'left' }}>
              <p style={{ fontWeight: 'bold', textAlign: 'center' }}>Jucelia Dobrychtop</p>
              O trabalho voluntário é uma experiência incrível,
              um aprendizado imenso a cada solicitação atendida.
              Ao participar de uma nova campanha, você não sabe
              qual resultado terá, mas ao chegar no término, é uma
              sensação incrível de dever cumprido.
              Amigos em Ação me ensinou que sempre podemos colaborar,
              participar e fazer muita diferença, que um pouco nosso é muito
              para alguém, e que a roupa "usada" se transforma em "roupa nova"
              nas mãos de quem precisa.
              A satisfação de estar no Amigos em Ação é enorme,
              orgulho de fazer parte de uma equipe que faz a diferença!
            </p>
          </div>
        </div>
        <div className="vertical-rectangle">
          <div>
            <img className="profile-img-2" src={ImgPerfil2} alt="Imagem do perfil" />
            <p className="vertical-text-p" style={{ textAlign: 'left' }}>
              <p style={{ fontWeight: 'bold', textAlign: 'center' }}>Jocinéia Sarina Klein</p>
              Ser voluntária é algo incrível!
              Comecei meu trabalho na ONG Amigos em Ação,
              em Agosto de 2023, mas já me sinto parte desta
              grande família do bem. Trabalhar em prol do próximo
              é algo grandioso, e junto da ONG, encontrei o
              lugar perfeito para poder desenvolver este trabalho.
              Saber que ao doar um pouco do meu tempo eu conseguirei
              ajudar á colocar comida na mesa de uma família é simplesmente
              maravilhoso e não há nada mais gratificante. Seja Voluntário
              você também!
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h2 className='titulo-poppins' style={{ color: '#2999E7' }}>Saiba onde nos encontrar</h2>
        <p>Nossa unidade de Jaraguá do Sul está localizada na cidade de Jaraguá do Sul, Estado de Santa Catarina. Para mais detalhes, confira o endereço abaixo!</p>
        <LoadScript
          googleMapsApiKey="API_AQUI"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
        <p><strong>Arena Jaraguá</strong> – Rua Gustavo Hagedorn, 636 – Sala 18 – Nova Brasília, Jaraguá do Sul – SC</p>
      </div>
      <br />
      <br />
      <br />
      <h4>Propósitos</h4>
      <h2 className='titulo-poppins' style={{ color: '#2999E7' }}>Os propósitos como ONG</h2>
      <br />
      <br />
      <br />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="vertical-rectangle-propositos">
          <div>
            <p className="vertical-text-propositos" style={{ textAlign: 'left' }}>
              <p style={{ fontWeight: 'bold', textAlign: 'center' }}>Missão</p>
              Combater as desigualdades sociais por meio de ações concretas e sustentáveis;
              Fomentar o espírito de voluntariado e desenvolver programas nas áreas de cultura,
              esporte, educação e lazer que reforçam a cidadania e a inclusão social.
            </p>
          </div>
        </div>
        <div className="vertical-rectangle-propositos">
          <div>
            <p className="vertical-text-propositos" style={{ textAlign: 'left' }}>
              <p style={{ fontWeight: 'bold', textAlign: 'center' }}>Visão</p>
              Ser uma força transformadora na sociedade, promovendo a igualdade e a inclusão social.
              Aspiramos a um mundo onde cada indivíduo tenha a oportunidade de contribuir e prosperar,
              idependentemente de sua origem ou condição social.
            </p>
          </div>
        </div>

        <div className="vertical-rectangle-propositos ">
          <div>
            <p className="vertical-text-propositos" style={{ textAlign: 'left' }}>
              <p style={{ fontWeight: 'bold', textAlign: 'center' }}>Valores</p>
              - Compromisso com a igualdade;<br />
              - Integridade e transparência;<br />
              - Respeito pela diversidade;<br />
              - Empatia e compaixão;<br />
              - Empoderamento;<br />
              - Colaboração e parceria;<br />
              - Inovação;<br />
              - Voluntariado ativo.<br />
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <div style={{ flex: '1', padding: '50px' }}>
          <h3 style={{textAlign: 'left'}}>Feedback</h3>
          <h2 className='titulo-poppins-feedback' style={{ color: '#2999E7', marginTop: '-20px' }}>Fale conosco</h2>
        </div>
        <div style={{ flex: '1', padding: '10px' }}>
          <img style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-80px', marginLeft: '40px'}} src={ImgFeedBack} alt="Imagem de feedback" />
        </div>
        <div style={{ flex: '2', padding: '20px' }}>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginRight: '-350px', marginTop: '-450px' }}>
            <label htmlFor="nome">Nome</label><br />
            <input style={{ width: '400px' }} type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} /><br /><br />

            <label htmlFor="telefone">Telefone</label><br />
            <input style={{ width: '400px' }} type="text" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} /><br /><br />

            <label htmlFor="email">E-mail</label><br />
            <input style={{ width: '400px' }} type="text" id="email" name="email" value={formData.email} onChange={handleChange} /><br /><br />


            <label htmlFor="descricao">Descreva sua opinião*</label><br />
            <textarea style={{ width: '400px' }} id="descricao" name="descricao" value={formData.descricao} onChange={handleChange}></textarea><br /><br />

            <label htmlFor="anonimo">
              <input type="checkbox" id="anonimo" name="anonimo" checked={formData.anonimo} onChange={handleChange} />
              Anônimo
            </label><br /><br />

            <input type="submit" value="Enviar"  style={{ backgroundColor: '#2999E7', border: 'none', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}/>
          </form>
        </div>
      </div>

      <div className="container">
      <header className="header">
        <h1>Nos ajude a ajudar!</h1>
      </header>
      <div className="content">
        <div className="left-column">
          <p>Nossa ONG não dispõe de recursos próprios, dependemos, assim, das doações dos associados para realizar trabalhos.
            Todo valor arrecadado é convertido em doações às famílias carentes e aos projetos sociais atendidos nesta data.
            Portanto, caso deseje contribuir conosco em dinheiro, aceitamos com muita felicidade e gratidão qualquer quantia!</p>
        </div>
        <div className="center-column">
          <img src="qr-code-placeholder.png" alt="QR Code" className="qr-code" />
          <p>LINK</p>
        </div>
        <div className="right-column">
          <p>Informações bancárias</p>
          <p>Agência 2727</p>
          <p>Dígito 8</p>
          <p>Conta 14531</p>
          <p>Dígito 9</p>
        </div>
      </div>
      <div className="join-us">
        <h2>Quer se juntar a nós?</h2>
        <p>Além de ajudar de forma anônima você pode também se juntar aos mais de 100 voluntários de nossa equipe e nos ajudar a transformar vidas, o receberemos de braços abertos!</p>
        <button className="volunteer-button">Se voluntariar</button>
      </div>
      <footer className="footer">
        <div className="partners">
          <h3>Amigos Em Ação</h3>
          <p>Associação de caridade</p>
          <p>Parcerias</p>
          <p>Instituição Edu. SESI-SENAI</p>
          <p>Distribuidora Água Já Express</p>
          <p>Sleep Way Pijamas</p>
          <p>Farmácia Receituário</p>
        </div>
        <div className="support">
          <h3>Suporte</h3>
          <p>amigosemacaoaj@gmail.com</p>
          <p>47-98822-1707</p>
          <p>Contato Gestor</p>
        </div>
        <div className="newsletter">
          <h3>Fique por dentro das novidades</h3>
          <p>Termos de Serviço</p>
          <p>Política de Privacidade</p>
        </div>
      </footer>
    </div>


    </div>
  );
}

export default Home;
