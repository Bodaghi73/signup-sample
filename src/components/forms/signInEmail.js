//styles
import './form.scss';

function SignInEmail() {
    return (
        <form className='form'>
            <span className='form__title'>ورود به حساب کاربری</span>
            <input className='form__input' placeholder='ایمیل یا شماره همراه'></input>
            <input className='form__input' type="password" placeholder='رمز عبور'></input>
            <button className='form__submit' type='submit'>ورود</button>
            <a className='form__pass' href='/authentication'>ورود با رمز یکبار مصرف</a>
        </form>
    );

}

export default SignInEmail;