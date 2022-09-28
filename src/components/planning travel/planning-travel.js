//styles
import './planning-travel.scss';

//imgs
import Frame from "../../assets/imgs/Frame.svg";

function PlanningTravel() {
    return (
        <div className='plannig-travel'>
            <img className='plannig-travel__img' src={Frame} alt=""></img>

            <div className='plannig-travel__description'>
                <span className='plannig-travel__do-u-know'>
                    با
                    <span className='plannig-travel__tamerlin'> تامرلین </span>
                    میدونی باید کجا بری!
                </span>
                <span className='plannig-travel__span-text'>سرگرم کننده ترین برنامه سفر رو بهت پیشنهاد میدم تا از سفرت خسته نشی:)</span>
                <span className='plannig-travel__span-plan'>
                    همین الان
                    <button className='plannig-travel__plan'>برنامه سفر</button>
                    مخصوص خودتو بگیر!
                </span>
            </div>

            
        </div>
    );

}

export default PlanningTravel;