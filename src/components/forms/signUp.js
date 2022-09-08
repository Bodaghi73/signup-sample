// import Input from '../elements/input';
//styles
import './form.scss';

import eye from "../../assets/imgs/eye.svg";

function SignUp() {
    return (
        <form className='form'>
            <span className='form__title'>لطفا اطلاعات موردنظر را وارد کنید:</span>
            <input className='form__input' type="number" placeholder='شماره همراه'></input>
            <input className='form__input' type="email" placeholder='ایمیل'></input>
            <input className='form__input' type="password" placeholder='رمز عبور'></input>
            <img className='form__eye' src={eye} alt=""></img>
            <input className='form__input' type="password" placeholder='تایید رمز عبور'></input>
            <button className='form__submit' type='submit'>ثبت نام</button>
        </form>
    );

}

export default SignUp;