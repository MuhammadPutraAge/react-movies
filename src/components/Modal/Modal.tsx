import { ModalContainer, ModalPoster } from "./ModalStyles";

interface Props {
  src: string;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ src, onClose }) => {
  return (
    <ModalContainer onClick={onClose}>
      <ModalPoster src={src} alt="modal" onClick={(e) => e.stopPropagation()} />
    </ModalContainer>
  );
};

export default Modal;
