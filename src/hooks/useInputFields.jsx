import React, { useState } from 'react';

const useInputFields = (defaultValues) => {

    const [filedValue, setFieldValue] = useState(defaultValues);

    const handleFieldOnChange = (e) => {
        setFieldValue(e.target.value);
    }

    return ([filedValue, handleFieldOnChange]);
};

export default useInputFields;