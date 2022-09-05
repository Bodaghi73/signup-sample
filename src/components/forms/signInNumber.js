//styles
import './forms.scss';

function SignInEmail() {
    return (
        <form className='form'>
            <span>لطفا شماره همراه خود را وارد کنید:</span>
            
                <input placeholder='شماره همراه'></input>
                <select>
                    <option>ایران +98</option>
                    <option>انگلیس +11</option>
                </select>
            
            <button type='submit'>ورود</button>
            <a href='/authentication'>ورود با رمز عبور</a>
        </form>
    );

}

export default SignInEmail;