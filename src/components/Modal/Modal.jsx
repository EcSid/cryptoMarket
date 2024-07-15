import { createPortal } from "react-dom";
import './Modal.css'
import { useRef, useEffect } from "react";

export default function Modal({children, open}) {
    const ref = useRef();

    useEffect(() => {
        if (open) {
            ref.current.showModal();
            ref.current.classList.add("activeModal");
        } else {
            ref.current.classList.remove("activeModal");
            ref.current.close();
        }
    }, [open])

    return createPortal(
        <dialog ref={ref}>{children}</dialog>,
        document.getElementById('modal')
    )
}