import successIcon from "../images/success.svg";
import errorIcon from "../images/error.svg";

function InfoToolTip({ onClose }) {
  return (
    <>
      <div className="popup popup__info-tool-tip">
        <div className="popup__container popup__info-tool-tip_container">
            <img className="popup__info-tool-tip_icon" src={successIcon} alt="Success" />
            {/* <img className="popup__info-tool-tip_icon" src={errorIcon} alt="Error" /> */}
            <p className="popup__info-tool-tip_message">
              Success! You have now been registered.
            </p>
            {/* <p className="popup__info-tool-tip_message">
              Oops, something went wrong! Please try again.
            </p> */}
            <button
              onClick={onClose}
              className="popup__close-btn"
              type="button"
            ></button>
        </div>
      </div>
    </>
  );
}

export default InfoToolTip;
