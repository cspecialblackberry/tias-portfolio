import PortfolioPiece from "../components/portfolioPiece"
import { projects } from '../../constants.ts'


export default function Portfolio() {
    return (
        <>
            <div className="portfolio">
                {projects.map((project, i) => {
                    return (
                        <PortfolioPiece 
                            key={i} 
                            name={project.name}
                            year={project.year}
                            coverImage={project.coverImage}
                            link={project.link}
                        />
                    )
                })}
            </div>
            
        </>
    )
}