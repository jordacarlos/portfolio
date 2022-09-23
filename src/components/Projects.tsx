import React from 'react'
import styles from "./Projects.module.css"
import Projetos from "../assets/Projetos.json";
import { BiCodeAlt } from "react-icons/bi";

const Projects = () => {
  return (
    <div className={styles.projects} id = "projetos">
        <h1>Projetos</h1>
        <p className={styles.projects_overview}>
            Listando alguns dos projetos que desenvolvi e fiz parte durante os estudos e formação na área de desenvolvimento de sistema.
        </p>
        <div className={styles.projects_content}>
            {Projetos.projetos.map((item:any, i:any) => (
                <div className={styles.projects_item} key={i}>
                    <div className={styles.project_img}>
                        <h4> Projeto: </h4>
                        <p>{item.nome}</p> 
                        <h5> Linguagens: </h5>
                        <p>{item.tecn}</p>
                        <h5> Descrição Projeto:</h5>
                        <p>{item.descri}</p>
                        <a href={item.link} target='_blanked'>
                            <button>Visualizar <i><BiCodeAlt/></i>  </button>
                        </a>
                    </div> 
                </div>
            ))}

        </div>
        
    </div>
  )
}

export default Projects