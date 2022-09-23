import React from 'react'
import Photo from "../assets/Foto_CPqD.jpg";
import styles from "./Header.module.css"

const Header = () => {

  return (
    <div className={styles.MainCointeiner}>
      <header>
        <a href='#sobre'><h4>Sobre</h4></a>
        <a href='#projetos'><h4>Projetos</h4></a>
      </header>
      <div className={styles.boas_vindas}>
            <img src={Photo} alt="" className={styles.img}/>
        <div className={styles.intro}>
          <div className={styles.apresentacao}>
            <h3>Bem-vindo!</h3>
            <h3>Eu sou</h3>
            <h3 className={styles.highlight_text}>Jordã Carlos de Jesus</h3>
          </div>
          <div>
            <p>Sou aspirante na área de tecnologia, buscando sempre aprimorar as habilidades necessárias para o desenvolvimento de 
              <strong className={styles.highlight_text}> aplicações</strong > e <strong className={styles.highlight_text}>soluções</strong>, 
              facilitando o cotidiano dos usuários.
            </p>
            <p>
            Fascinado principalmente na área de
            <strong className={styles.highlight_text}> front-end</strong>, na construção de aplicações voltadas na 
            <strong className={styles.highlight_text}> usabilidade</strong> e
            <strong className={styles.highlight_text}> experiência do usuário</strong>.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.redes}>
        <a href ="https://www.linkedin.com/in/jord%C3%A3-jesus-4060b9186"target='_blanked'><button><i className="bi bi-linkedin"></i> Linkedin</button></a>
        <a href ="https://github.com/jordacarlos" target='_blanked'><button><i className="bi bi-github"></i> GitHub</button></a>
      </div>
    </div>
  )
}

export default Header