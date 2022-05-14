import "../../styles/Modal.css";

const Modal = ({ children, isOpen, toggle, informacion }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article id={informacion} className={`modal ${isOpen && "is-open"}`} onClick={toggle}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        {children}
        
      </div>
    </article>
  );
};

export default Modal;