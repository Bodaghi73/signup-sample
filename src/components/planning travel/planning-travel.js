//pages & componenets
import Specifications from '../specifications/specifications';
//styles
import './planning-travel.scss';

function PlanningTravel() {
    return (
        <div className='plannig-travel'>
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

            <div className='plannig-travel__specifications'>
                <Specifications></Specifications>
            </div>
        </div>
    );

}

export default PlanningTravel;