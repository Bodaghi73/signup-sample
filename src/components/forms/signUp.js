//styles
import './forms.scss';

import eye from "../../assets/imgs/eye.svg";

function SignUp() {
    return (
        <form className='form'>
            <span>لطفا اطلاعات موردنظر را وارد کنید:</span>
            <input type="number" placeholder='شماره همراه'></input>
            <input type="email" placeholder='ایمیل'></input>
            <input type="password" placeholder='رمز عبور'></input>
            <img src={eye} alt=""></img>
            <input type="password" placeholder='تایید رمز عبور'></input>
            <button type='submit'>ثبت نام</button>
        </form>
    );

}

export default SignUp;