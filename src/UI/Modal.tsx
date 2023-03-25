import classes from "./Modal.module.css";

type ModalProps = {
  children: any;
  onClickModal: any;
};

const Modal = ({ children, onClickModal }: ModalProps) => {
  return (
    <>
      <div onClick={onClickModal} className={classes.backdrop} />
      <dialog className={classes.modal} open>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
