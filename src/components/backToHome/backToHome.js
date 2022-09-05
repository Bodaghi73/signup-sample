//styles
import './backToHome.scss';

import arrowLeft from "../../assets/imgs/arrow-left.svg";

function BackToHome() {
    return (
        <div className='backToHome'>
            <a className='backToHome__link' href='/'>
                <img src={arrowLeft} alt=""></img>
                بازگشت به صفحه اصلی
            </a>
        </div>
    );
}

export default BackToHome;