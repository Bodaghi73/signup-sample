//style
import './google-account.scss';

import google from "../../assets/imgs/google.svg";

function GoogleLink() {
    return (
        <div className='google-account'>
            <a className='google-account__account' href='/authentication'>
                <img className='google-account__logo' src={google} alt=""></img>
                با حساب کاربری گوگل ثبت نام کنید
            </a>
        </div>
    );
}

export default GoogleLink;