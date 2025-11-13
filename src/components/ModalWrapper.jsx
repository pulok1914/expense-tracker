function ModalWrapper({children,closeModal}) {
    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-box" onClick={e=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default ModalWrapper;