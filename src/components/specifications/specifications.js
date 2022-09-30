import { React, useState } from 'react';
import Select from 'react-select';

//styles
import './specifications.scss';

//imgs
import swap from "../../assets/imgs/arrow-swap-horizontal.svg";

function Specifications() {

    const [origin, setOrigin] = useState(null);
    const [destination, setِِDestination] = useState(null);

    const options = [
        { value: 'tehran', label: 'تهران' },
        { value: 'mashhad', label: 'مشهد' },
        { value: 'shiraz', label: 'شیراز' },
        { value: 'isfahan', label: 'اصفهان' },
        { value: 'tabriz', label: 'تبریز' },
        { value: 'rasht', label: 'رشت' },
        { value: 'zanjan', label: 'زنجان' },
    ];

    const customStyles = {
        indicatorSeparator: () => { }, // removes the "stick"
        dropdownIndicator: defaultStyles => ({
            ...defaultStyles,
            '& svg': { display: 'none' },
        }),

        control: defaultStyles => ({
            ...defaultStyles,
            borderRadius: "10px",
            padding: "0.5rem 1rem",

        }),
        option: defaultStyles => ({
            ...defaultStyles,
            borderRadius: "50px",
            padding: "0.5rem 1rem",

        }),
        menu: defaultStyles => ({
            ...defaultStyles,
            margin:"0",
        }),
        multiValue: defaultStyles => ({
            ...defaultStyles,
            color:"var(--light-color)",
            backgroundColor:"var(--green-plan-color)",
            '& [class^=css]': { color:"var(--light-color)" },
        })
    }

    const swapButton = () => {
        setOrigin(destination[0]);
        setِِDestination([origin]);
    }

    return (
        <div className='specifications'>
            <span className='specifications__titr'>مشخصات سفر</span>

            <div className='specifications__select'>
                <Select className='specifications__select-city'
                    defaultValue={origin}
                    value={origin}
                    onChange={setOrigin}
                    placeholder="مبدا"
                    options={options}
                    styles={customStyles}
                />
                <Select className='specifications__select-city'
                    defaultValue={destination}
                    value={destination}
                    onChange={setِِDestination}
                    placeholder="مقصد"
                    isMulti={true}
                    options={options}
                    styles={customStyles}
                />
            </div>

            <button className='specifications__swap' onClick={swapButton}>
                <img src={swap} alt=""></img>
            </button>

            <button className='specifications__register'>ثبت</button>
        </div>
    );
}

export default Specifications;