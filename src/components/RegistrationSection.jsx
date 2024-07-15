import { useState } from "react"
import Button from "./Button/Button"
import Modal from "./Modal/Modal"
import FormToRegister from "./FormToRegister/FormToRegister"


export default function RegistrationSection() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button style={{
                position: 'absolute',
                top: '91%',
                left: '50%',
                transform: 'translate(-50%)'
            }} onClick={() => setOpen(true)}>Зарегистрироваться</Button>
            <Modal open={ open }>
                <h2>Регистрация</h2>
                <FormToRegister />
                <Button style={{
                    position: 'absolute',
                    bottom: '8.5%',
                    padding: '0.6rem 2rem'
                }}
                onClick={() => setOpen(false)}>Закрыть</Button>
            </Modal>
        </>
    )
}