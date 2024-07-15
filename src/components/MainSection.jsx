import PortfolioChart from './PortfolioChart'
import CurrencyComponent from './CurrencyComponent/CurrencyComponent'


export default function MainSection() {
    return (
    <>
        
        <div className='MainSection'>
            <ul className="currency">
                <CurrencyComponent/>             
            </ul>
            <PortfolioChart />
        </div>
    </>
    )
}