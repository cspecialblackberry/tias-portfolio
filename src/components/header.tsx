import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <div className="header">
                <Link to={'/'}>
                    <img src="images/logo.png" className="logo"/>
                </Link>
                <div className="workNav">
                    <div className="navHeader_div">
                        <Link to={'/'} className="navHeader">WORK</Link>
                    </div>
                    <div>
                        <Link to={'/'} className="navLink">Makeup Icons & Ulta Beauty Rebrand</Link><br/>
                    </div>
                    <div>
                        <Link to={'/'} className="navLink">Soul Sync - A Yoga App</Link><br/>
                    </div>
                    <div>
                        <Link to={'/'} className="navLink">Favorite Day Soda Rebrand</Link><br/>
                    </div>
                    <div>
                        <Link to={'/'} className="navLink">Finding Sisterhood Through Diversity - Audio Slideshow</Link><br/>
                    </div>
                    <div>
                        <Link to={'/'} className="navLink">Phoenix Fashion: The Magazine</Link><br/>
                    </div>
                    <div>
                        <Link to={'/'} className="navLink">GASTRA - Cocktail Festival</Link><br/>
                    </div>
                    <div>
                        <Link to={'/'} className="navLink">Cupcake Amour Brochure</Link><br/>
                    </div>
                    <div>
                        <Link to={'/'} className="navLink">Transinclusive Group Website Rebrand</Link><br/>
                    </div>
                    <div className="navHeader_div">
                        <Link to={'/'} className="navHeader">ABOUT TIA</Link>
                    </div>
                </div>
            </div>
        </>
    )
} 