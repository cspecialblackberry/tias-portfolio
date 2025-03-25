const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

export default function BackToTop() {
    return (
        <>
            <div className="backToTop">
                <button className="backToTopButton" onClick={scrollToTop}>^ Back To Top</button>
            </div>
        </>
    )
}