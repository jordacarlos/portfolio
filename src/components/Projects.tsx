import React from 'react'

import styles from "./Projects.module.css"

import Projetos from "../assets/Projetos.json";




const Projects = () => {
  return (
    <div className={styles.projects}>
        <h1>Projetos</h1>
        <p className={styles.projects_overview}>
        Listando alguns dos projetos que desenvolvi e fiz parte durante os estudos e formação na área de desenvolvimento de sistema.
        </p>
        <div className={styles.projects_content}>
            {Projetos.projetos.map((item:any, i:any) => (
            <div className={styles.projects_item} key={i}>
                <div className={styles.project_img}>
                    <a href={item.link} target='_blanked'><img src={item.imagem} alt=""/></a>
                </div>
                <div className={styles.project_desc}>
                    <p>{item.descri}</p>
                </div>  
            </div>

            ))}

        </div>
        
    </div>
  )
}

export default Projects