//styles
import './backToHome.scss';

import arrowLeft from "../../assets/imgs/arrow-left.svg";

function BackToHome() {
    return (
        <div className='back-to-home'>
            <a className='back-to-home__link' href='/'>
                <img src={arrowLeft} alt=""></img>
                بازگشت به صفحه اصلی
            </a>
        </div>
    );
}

export default BackToHome;