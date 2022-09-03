//styles
import './subscription.scss';

function Subscription() {
    return (
        <div className='subscription'>
            <div className='subscription__caption'>
                <div className='subscription__caption--titr'>
                    <span>با خرید اشتراک میتونی:</span>
                </div>
                <div className='subscription__caption--items'>
                    <span>بیشتر از 2 مقصد برای مسافرت مشخص کنی.</span>
                    <span>مدت اقامت در مقصد های مختلف رو تعیین کنی.</span>
                    <span>میتونیم 3 نوع برنامه متنوع برای سفرت مشخص کنیم</span>
                </div>
            </div>
            <div className='subscription__button'>
                <button>
                    <a href="/authentication">خرید اشتراک</a>
                </button>
            </div>
        </div>
    );
}

export default Subscription;