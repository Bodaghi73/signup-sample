//styles
import './form.scss';

function VerificationCode() {
    return (
        <form className='form'>
            <span className='form__title'>لطفا کد تایید را وارد کنید:</span>
            <div className='form__verificationCode'>
                <input className='form__input-verificationCode'></input>
                <input className='form__input-verificationCode'></input>
                <input className='form__input-verificationCode'></input>
                <input className='form__input-verificationCode'></input>
            </div>
            <div className='form__confirmation'>
                <div className='form__timer'>
                    <span>00:58</span>
                    <a className='form__link' href='/authentication'>ارسال مجدد کد</a>
                </div>
                <button className='form__submit' type='submit'>تایید</button>
            </div>
        </form>
    );

}

export default VerificationCode;