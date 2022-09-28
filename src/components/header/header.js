//styles
import "./header.scss";

import logo from "../../assets/imgs/logo.svg";
import flagIran from "../../assets/imgs/FlagIran.svg";

function Header() {
    return (
        <header className="header">
            <div className="header__menu">
                <div className="header__logo">
                    <img src={logo} alt=""></img>
                    <span className="header__tamerlin-span">تامرلین</span>
                </div>
                <nav className="header__nav">
                    <ul className="header__ul">
                        <li className="header__li">خرید بلیت</li>
                        <li className="header__li">تورها</li>
                        <li className="header__li">ارتباط با ما</li>
                    </ul>
                </nav>
            </div>

            <div className="header__menu-link">
                <div>
                    <div className='header__langue'>
                        <span className="header__span-langue">فارسی</span>
                        <img src={flagIran} alt=""></img>
                    </div>
                </div>
                <button className='header__signup' type='submit'>ثبت نام</button>
            </div>
        </header>
    );

}

export default Header;