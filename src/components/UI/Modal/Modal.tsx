import { IoMdClose } from 'react-icons/io';
import './Modal.scss';

const Modal = (props: any) => {
  const classes = 'modal ' + props.className;
  // actionClass = props.action + '-btn';
  
  return (
    <div className={classes}>
      <div className="dark-bg" onClick={() => props.setIsOpen(false)} />
      <div className="centered">
        <div className="modal-wrapper">
          <div className="modal-header">
            <h5 className="heading">{props.title}</h5>
            <button className="close-btn" onClick={() => props.setIsOpen(false)}>
            <IoMdClose />
          </button>
          </div>
          <div className="modal-content">{props.children}</div>
          {/* <div className="modal-actions-wrapper">
            <div className="actions-container">
              <button
                className={actionClass}
                onClick={() => props.setIsOpen(false)}
              >
                {props.action}
              </button>
              <button
                className="cancel-btn"
                onClick={() => props.setIsOpen(false)}
              >
                cancel
              </button>
            </div>
          </div> */}
        </div>
      </div>
      </div>
  );
}

export default Modal;