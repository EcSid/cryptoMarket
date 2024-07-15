import { useEffect, useState } from "react"

export default function Footer() {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)

    useEffect(() => {
        const interval = setInterval(() => setWindowHeight(window.innerHeight), 500);
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <footer style={{
            top: windowHeight + 50 + 'px',
        }}>
                <a className="blackUrl" href='http://google.com'>Связаться с нами</a>
                <span>&nbsp;|&nbsp;&nbsp;</span>
                <a className="blackUrl" href='http://google.com'>Пользовательское соглашение</a>
                <span>&nbsp;|&nbsp;&nbsp;</span>
                <a className="blackUrl" href='http://google.com'>Наше комьюнити</a>
            <h4 className="ourCompany">@Investing 2019-{new Date().getFullYear()}</h4>
        </footer>
    )
}