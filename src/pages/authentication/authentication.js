//pages & components
import BackToHome from "../../components/backToHome/backToHome";

//styles
import './authentication.scss';

import backgroundImage from "../../assets/imgs/airplane.svg";

function Authentication() {
    return (
        <div className="authentication">
            <div className='authentication__content'>
                <img src={backgroundImage} alt=""></img>
            </div>
            <div className='authentication__back'>
                <BackToHome></BackToHome>
            </div>
        </div>
    );
}

export default Authentication;