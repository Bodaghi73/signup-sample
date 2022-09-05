//styles
import './forms.scss';

function VerificationCode() {
    return (
        <form className='form'>
            <span>لطفا کد تایید را وارد کنید:</span>
            <div className='form--verificationCode'>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
            </div>
            <button type='submit'>ورود</button>
            <a href='/authentication'>ارسال مجدد کد</a>
        </form>
    );

}

export default VerificationCode;