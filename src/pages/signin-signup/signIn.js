import axios from 'axios';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

//styles
import './form.scss';

function SignIn() {

    const [state, setState] = useState({
        username: "",
        password: "",
        showPhoneNumberForm: false,
    });

    const login = async (event) => {
        event.preventDefault();
        const params = new URLSearchParams();
        params.append('grant_type', 'password');
        params.append('username', state.username);
        params.append('password', state.password);
        const response = await axios.post("/api/o/token/", params, {
            headers: {
                'Authorization': 'Basic U0VPeEdVaVZQSWJkZTBlNHFmeDd1dThoQmpuVHNtdlJyVUx3T0VLODpoUkRYMG04bm5LQVp4WVFwWmRxVE94M3QxdDhZMVV6dDZHV2hNaWZGRERQaHVJQVRaaWhuYUZUdTlCTWFTSVQ5SlRqMFZmYkFmUW9zVmE1R09Mcjc2MGFWWEJlc0Y3RmVqWmJrZ2REZGxIZUczWXV6dmoxY1NOVWxPRm1IRmcxVQ==',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });

        if (response.status === 200)
            return toast.success("با موفقیت وارد شدید.");

        toast.error("عملیات با خطا مواجه شد!");
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState((values) => ({ ...values, [name]: value }));
    }

    const changeSigninView = () => {
        setState((values) => ({ ...values, showPhoneNumberForm: !state.showPhoneNumberForm }));
    }

    return (
        <>
            {!state.showPhoneNumberForm ?
                <form className='form' onSubmit={login}>
                    <span className='form__title'>ورود به حساب کاربری</span>
                    <input className='form__input' placeholder='ایمیل یا شماره همراه' name='username' value={state.username} onChange={handleChange}></input>
                    <input className='form__input' type="password" placeholder='رمز عبور' name='password' value={state.password} onChange={handleChange}></input>
                    <button className='form__submit' type='submit'>ورود</button>
                    <span className='form__link' onClick={changeSigninView}>ورود با رمز یکبار مصرف</span>
                    <ToastContainer />
                </form>

                : <form className='form'>
                    <span className='form__title'>لطفا شماره همراه خود را وارد کنید:</span>
                    <div className='form__country'>
                        <input className='form__input input-select' placeholder='شماره همراه'></input>
                        <select className='form__select'>
                            <option className='form__option'>ایران +98</option>
                            <option className='form__option'>انگلیس +11</option>
                        </select>
                    </div>
                    <button className='form__submit' type='submit'>دریافت کد</button>
                    <span className='form__link' onClick={changeSigninView}>ورود با رمز عبور</span>
                </form>}
        </>
    );
}

export default SignIn;