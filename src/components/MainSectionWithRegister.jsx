import PortfolioChart from './PortfolioChart'
import CurrencyComponent from './CurrencyComponent/CurrencyComponent'
import Button from './Button/Button'
import { useState } from 'react'
import AllCurrency from './ContentSection/AllCurrency'
import SearchInput from './SearchInput'
import CurrencyComponeNT from './CurrencyComponent/CurrencyComponent'
import News from './ContentSection/News'

export default function MainSectionWithRegister() {
    const [type, setType] = useState("all-currency");
    const [valueSearch1, setValueSearch1] = useState()
    const [valueSearch2, setValueSearch2] = useState()
    const [valueSearch3, setValueSearch3] = useState()

    function setNewType(newType) {
        setType(newType);
    }

    function onInput1(e) {
        setValueSearch1(e.target.value)
    }

    function onInput2(e) {
        setValueSearch2(e.target.value)
    }

    function onInput3(e) {
        setValueSearch3(e.target.value)
    }

    return (
        <>
            <div className='MainSection'>
                <ul className='currency'>
                    <Button onClick={() => setNewType('all-currency')} isActive={type === 'all-currency'}>Весь рынок</Button>
                    <Button onClick={() => setNewType('your-currency')} isActive={type === 'your-currency'}>Ваша валюта</Button>
                    <Button onClick={() => setNewType('news')} isActive={type === 'news'}>Новости на бирже</Button>
                </ul>
                <PortfolioChart />
            </div>

            <div className='ContentSection'>
                    {type === 'all-currency' && (
                    <>
                        <SearchInput onInput={onInput1} placeholder='Введите название криптовалюты'></SearchInput>
                        <AllCurrency valueSearch={valueSearch1}/>
                    </>
                    )}

                    {type === 'your-currency' && (
                    <>
                        <SearchInput onInput={onInput2} placeholder='Введите название криптовалюты'></SearchInput>
                        <CurrencyComponeNT valueSearch={valueSearch2} layout={true}/>
                    </>
                    )}   

                    {type === 'news' && (
                    <>
                        <SearchInput onInput={onInput3} placeholder='Введите название новости'></SearchInput>
                        <News valueSearch={valueSearch3}/>
                    </>
                    )}        
                    
            </div>
        </>


    )
}