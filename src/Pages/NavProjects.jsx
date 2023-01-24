import Navbar from "../components/Navbar/Navbar";
import useScrollPercentage from '../components/useScrollPercentage';
import styles from '../components/styles/NavProjects.module.css';
import PageChange from '../components/PageChange';
import ProjectImageNav from "../components/Project/ProjectImageNav";


const NavProjects = () => {

    const [scrollRef, scrollPercentage] = useScrollPercentage();

    
  return (
    
    <section  className={styles.section} ref={scrollRef}>
        <PageChange />
        <Navbar scrollProgress={scrollPercentage} />

        <div className={styles.container}></div>
        
        <ProjectImageNav 
            title="Malbury Ocean View"
            positionTop="50vh"
            linkSrc="Malbury-Ocean-View"
        />
        
        <ProjectImageNav 
            title="Grover Complex"
            positionTop="57vh"
            linkSrc="Grover-Complex"
        />
        
        <ProjectImageNav 
            title="Wineland Golf Field"
            positionTop="64vh"
            linkSrc="Wineland-Golf-Field"
        />

        <ProjectImageNav 
            title="Coming Soon"
            positionTop="71vh"
        /> 
        

    </section>
  )
}

export default NavProjects