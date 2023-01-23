import Navbar from "../components/Navbar/Navbar";
import useScrollPercentage from '../components/useScrollPercentage';
import styles from '../components/styles/NavProjects.module.css';
import PageChange from '../components/PageChange';


const NavProjects = () => {

    const [scrollRef, scrollPercentage] = useScrollPercentage();

    
  return (
    
    <section  className={styles.section} ref={scrollRef}>
        <PageChange />
    <Navbar scrollProgress={scrollPercentage} />
        <div className={styles.imageContainer} >
            <img src="" alt="" className={styles.image} />
            <img src="" alt="" className={styles.image} />
            <img src="" alt="" className={styles.image} />
        </div>

        <aside className={styles.textContainer}>
            <div className={styles.coverBlock}></div>
            <ul className={styles.projects}>
                <li className={styles.projectName}>Malbury Ocean View</li>
                <li className={styles.projectName}>Grover Complex</li>
                <li className={styles.projectName}>Wineland Golf Field</li>  
            </ul>
        </aside>

    </section>
  )
}

export default NavProjects