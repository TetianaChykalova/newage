import React from 'react';

function InputGender(props) {

    const onChangeValue = (e) => {
        let gender = e.target.value
        props.props.updateUserGender(gender)
    }

    return (
        <div onChange={onChangeValue}>
            <input type="radio" value="Male" name="gender" /> Male
            <input type="radio" value="Female" name="gender" /> Female
        </div>
    );
}

export default InputGender;
