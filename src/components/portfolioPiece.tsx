import { Link } from 'react-router-dom'
import { PortfolioPieceProps } from '../../constants.ts'

export default function PortfolioPiece (props: PortfolioPieceProps) {
    return (
        <>
            <Link to={`${props.link}`} className="pContainer" style={{ backgroundImage: `url(${props.coverImage})` }}>
                <div className='pContainer_sub'>
                    <div className='portfolioPieceNameContainer'>
                        <h3>{props.year}</h3>
                        <h2>{props.name}</h2>
                    </div>
                </div>
            </Link>
        </>
    )
}