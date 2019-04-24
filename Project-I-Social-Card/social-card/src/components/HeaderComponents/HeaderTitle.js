import React from 'react';
import './Header.scss';
import moment from 'moment'

const HeaderTitle = () => {
    return (
        <div className="title">
            <h1>Lambda School</h1>
            <h2>@LambdaSchool</h2>
            <h2> • {moment().format("YY MMM")}</h2>
        </div>
    )
}

export default HeaderTitle
