//styles
import './subscription.scss';

function Subscription() {
    return (
        <div className='subscription'>
            <div className='subscription__title'>
                <span>با خرید اشتراک میتونی:</span>
            </div>
            <div className='subscription__items'>
                <span className='subscription__item'>بیشتر از 2 مقصد برای مسافرت مشخص کنی.</span>
                <span className='subscription__item'>مدت اقامت در مقصد های مختلف رو تعیین کنی.</span>
                <span className='subscription__item'>میتونیم 3 نوع برنامه متنوع برای سفرت مشخص کنیم</span>
            </div>
            <div className='subscription__buy'>
                <button className='subscription__button'>
                    <a className='subscription__link' href="/authentication">خرید اشتراک</a>
                </button>
            </div>
        </div>
    );
}

export default Subscription;