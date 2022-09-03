//styles
import './backToHome.scss';

import arrowLeft from "../../assets/imgs/arrow-left.svg";

function BackToHome() {
    return (
        <div className='backToHome'>
            <button>
                <img src={arrowLeft} alt=""></img>
                بازگشت به صفحه اصلی
            </button>
        </div>
    );
}

export default BackToHome;