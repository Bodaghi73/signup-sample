import { Outlet } from "react-router-dom";

//pages & components
import BackToHome from "../../components/back-to-home/back-to-home";
import Subscription from "../../components/subscription/subscription";
import Tabs from '../../components/tabs/tabs';
import GoogleLink from '../../components/google-account/google-account';

//styles
import './authentication.scss';

import backgroundImage from "../../assets/imgs/airplane.svg";

function Authentication() {
    return (
        <div className="authentication">
            <div className='authentication__content'>
                <div className="authentication__forms">
                    <Tabs></Tabs>
                    <Outlet />
                    <GoogleLink></GoogleLink>
                </div>
                <img className="authentication__background" src={backgroundImage} alt=""></img>
                <Subscription></Subscription>
            </div>
            <div className='authentication__back'>
                <BackToHome></BackToHome>
            </div>
        </div>
    );
}

export default Authentication;