import styles from "./style.module.scss";

interface ModalProps {
  children?: React.ReactNode;
  show?: boolean;
  closeHandler?: () => void;
}

export const Modal = ({ children, show, closeHandler }: ModalProps) => {
  return (
    <div className={`${styles.modal} ${show ? styles.modal__show : ""}`}>
      <div
        className={styles.modal__overlay}
        onClick={closeHandler ? closeHandler : () => {}}
      ></div>
      <div className={styles.modal__content}>
        <div
          className={`${styles.modal__content_inner} ${
            show ? styles.modal__content_inner_show : ""
          }`}
        >
          {children && children}
        </div>
      </div>
    </div>
  );
};
