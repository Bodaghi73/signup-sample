import { Link, useLocation } from "react-router-dom";

//styles
import './tabs.scss';

function Tabs() {
    const location = useLocation();
    return (
        <div className='tabs'>
            <div className='tabs__tab'>
                <Link className={`tabs__link ${location.pathname === "/authentication/signup" ? 'active' : ''}`} to="signup">ثبت نام</Link>
            </div>
            <div className='tabs__tab'>
                <Link className={`tabs__link ${location.pathname === "/authentication/signin" ? 'active' : ''}`} to="signin">ورود</Link>
            </div>
        </div>
    );
}

export default Tabs;