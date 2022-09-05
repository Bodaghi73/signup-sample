//styles
import './forms.scss';

function SignInEmail() {
    return (
        <form className='form'>
            <span>ورود به حساب کاربری</span>
            <input placeholder='ایمیل یا شماره همراه'></input>
            <input type="password" placeholder='رمز عبور'></input>
            <button type='submit'>ورود</button>
            <a href='/authentication'>ورود با رمز یکبار مصرف</a>
        </form>
    );

}

export default SignInEmail;