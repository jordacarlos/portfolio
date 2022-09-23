import React from 'react'

import styles from './About.module.css'
import {FaJava ,FaReact, FaNodeJs,FaFigma} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import { DiJavascript1,DiGit,DiDatabase } from "react-icons/di";
import { SiTypescript,SiGnubash } from "react-icons/si";

const About = () => {
  return (

    <div className={styles.MainAbout} id="sobre">
        <h1>Sobre</h1>
        <div>
            <p className={styles.introText}>
                Conheça mais sobre algumas linguagens que possuo conhecimento dentro da área de desenvolvimento.
            </p>
            <h2><i className="bi bi-caret-right-fill"></i>Skills</h2>
            <div className={styles.Skills}>
                <div className={styles.skills_conteiner}>
                    <p className={styles.details_skills}>Front-End</p>
                    <div className={styles.Skills_icons}>
                        <i><AiFillHtml5/></i>
                        <i><FaReact  /></i>
                        <i><DiJavascript1 /></i>
                        <i><SiTypescript /></i>
                        <i><FaFigma /></i>
                    </div>
                </div>
                <div className={styles.skills_conteiner}>
                    <p className={styles.details_skills}>Back-End</p>
                    <div className={styles.Skills_icons}>
                        <i><FaNodeJs/></i>
                        <i><FaJava/></i>
                    </div>
                </div>
                <div className={styles.skills_conteiner}>
                    <p className={styles.details_skills}>Outros</p>
                    <div className={styles.Skills_icons}>
                        <i><DiGit /></i>
                        <i><DiDatabase /></i>
                        <i><SiGnubash /></i>
                    </div>
                </div>
            </div>
            <div className={styles.btnLink}>
                <a href='https://www.linkedin.com/in/jordã-jesus-4060b9186/details/certifications/' target='_blanked'><button><i className="bi bi-share"></i> Descobrir</button></a>
            </div>
        </div>
    </div>
  )
}
export default About