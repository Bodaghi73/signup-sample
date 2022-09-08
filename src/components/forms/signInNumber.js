//styles
import './form.scss';

function SignInEmail() {
    return (
        <form className='form'>
            <span className='form__title'>لطفا شماره همراه خود را وارد کنید:</span>
            <input className='form__input' placeholder='شماره همراه'></input>
            <select>
                <option>ایران +98</option>
                <option>انگلیس +11</option>
            </select>
            <button className='form__submit' type='submit'>ورود</button>
            <a className='form__pass' href='/authentication'>ورود با رمز عبور</a>
        </form>
    );

}

export default SignInEmail;