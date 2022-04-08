import React from 'react';

function CityFun(props) {
    console.log(props.name);
    return (
        <div>
            <>
            {
                props.name === 'Amit' ? 'chintan' :
                props.name === 'Ankit' ? 'chintu' : ''
            }
            </>
        </div>
    );
}

export default CityFun;