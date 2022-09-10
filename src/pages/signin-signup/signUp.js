//styles
import './form.scss';

function SignUp() {
    return (
        <form className='form'>
            <span className='form__title'>لطفا اطلاعات موردنظر را وارد کنید:</span>
            <input className='form__input' placeholder='شماره همراه'></input>
            <input className='form__input' type="email" placeholder='ایمیل'></input>
            <span className='form__eye'>
                <input className='form__input' type="password" placeholder='رمز عبور'></input>
            </span>
            <span className='form__eye'>
                <input className='form__input eye' type="password" placeholder='تایید رمز عبور'></input>
            </span>
            <button className='form__submit' type='submit'>ثبت نام</button>
        </form>
    );
}

export default SignUp;