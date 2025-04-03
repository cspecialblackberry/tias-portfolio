import ultaMockup from "../../../images/ulta_mockup.png"
import ultaPhone from "../../../images/ulta_phone.png"
import icons from "../../../images/icons.png"
import iconsBold from "../../../images/icons_bold.png"

import Recommended from "../../components/recommended"

import "./workPages.css"

export default function UltaRebrand () {
    return (
        <>
            <div className="workPage">
                <h1>MAKEUP ICONS AND ULTA REBRAND</h1>
                <img src={ultaMockup} className="fullImg"></img>
                <p className="imgTag">Makeup Icons & Beauty Website Rebrand</p>
                <img src={ultaPhone} className="fullImg"></img>
                <p className="imgTag">Makeup Icons & Beauty App Rebrand</p>
                <div style={{height: 50}}/>
                <p className="imgTagL">The icons in this set include:</p>
                <p className="imgTagL">Makeup Bag, Nail Polish, Foundation Compact, Mascara Wand, Mirror, Makeup Brush, Sunscreen, Lipstick, Skincare Serum, Facial Cleanser, Perfume Bottle, and Eyeshadow Palette </p>
                <div className="twoImgC">
                    <div className="pContainer">
                        <div style={{backgroundImage: `url(${icons})`}} className="pContainer_sub"/>
                    </div>
                    <div className="pContainer">
                        <div style={{backgroundImage: `url(${iconsBold})`}} className="pContainer_sub"/>
                    </div>
                </div>
                <p>Project Overview</p>
                <p>This project aimed to enhance the user experience within the beauty and skincare space by creating custom icons and redesigning the Ulta Beauty app and website.
                    Observing that many beauty apps, like Sephora or Ulta, lacked specific icons for products such as sunscreen and face cleansers, I identified an opportunity to improve 
                    user accessibility and ease of navigation. I aimed to create icons that simplified product recognition while ensuring the interface remained visually appealing and intuitive 
                    across devices.
                </p>
                <p>Design Concept</p>
                <p>I focused on designing icons that were both simple and highly recognizable. Inspired by my passion for beauty, I aimed to create intuitive icons that users could instantly 
                    associate with specific product types, even for items that typically require text-heavy descriptions (e.g., face cleansers). This concept emphasizes clarity, reducing the 
                    need for users to read detailed names to understand each product’s purpose. The Ulta Beauty app and website redesign further illustrated how these icons could enhance 
                    navigation, providing a cleaner and more accessible user experience.
                </p>
                <p>Technical Execution</p>
                <p>Using Adobe Illustrator, I crafted each icon with minimalistic yet distinctive details, ensuring that users could easily differentiate between product types. I used Adobe XD 
                    to bring the icons into a real-life setting for the app and website redesign, adapting them for mobile and desktop layouts. This redesign also focused on accessibility improvements, 
                    with user-friendly features designed to optimize navigation and visual hierarchy on both small and large screens. Through this project, I combined aesthetic functionality with 
                    accessibility, resulting in a practical yet engaging interface for the beauty community.
                </p>
                <Recommended />
            </div>
        </>
    )
}