import "../../styles/Modal.css";

const Modal = ({ children, isOpen, toggle }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={toggle}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={toggle}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;