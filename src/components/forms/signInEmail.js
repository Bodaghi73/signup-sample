import axios from 'axios';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

//styles
import './form.scss';

function SignInEmail() {

    const [input, setInput] = useState({
        username: "",
        password: ""
    });

    const login = async (event) => {
        event.preventDefault();
        const params = new URLSearchParams();
        params.append('grant_type', 'password');
        params.append('username', input.username);
        params.append('password', input.password);
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
        setInput((values) => ({ ...values, [name]: value }));
    }

    return (
        <form className='form' onSubmit={login}>
            <span className='form__title'>ورود به حساب کاربری</span>
            <input className='form__input' placeholder='ایمیل یا شماره همراه' name='username' value={input.username} onChange={handleChange}></input>
            <input className='form__input' type="password" placeholder='رمز عبور' name='password' value={input.password} onChange={handleChange}></input>
            <button className='form__submit' type='submit'>ورود</button>
            <a className='form__pass' href='/authentication'>ورود با رمز یکبار مصرف</a>
            <ToastContainer />
        </form>
    );

}

export default SignInEmail;