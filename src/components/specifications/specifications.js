import { React, useState } from 'react';
import Select from 'react-select';

//styles
import './specifications.scss';

function Specifications() {

    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { value: 'tehran', label: 'تهران' },
        { value: 'mashhad', label: 'مشهد' },
        { value: 'shiraz', label: 'شیراز' },
        { value: 'isfahan', label: 'اصفهان' },
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
            
        })
    }

    return (
        <div className='specifications'>
            <span className='specifications__titr'>مشخصات سفر</span>

            <div className='specifications__select'>
                <Select className='specifications__select-city'
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    placeholder="مبدا"
                    options={options}
                    styles={customStyles}
                />
                <Select className='specifications__select-city'
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    placeholder="مقصد"
                    options={options}
                    styles={customStyles}
                />
            </div>
        </div>
    );
}

export default Specifications;