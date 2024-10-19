import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "../Pages";
// import HW6 from '../../hw06/HW6'
// import HW7 from '../../hw07/HW7'
// import HW8 from '../../hw08/HW8'
// import HW9 from '../../hw09/HW9'

function Junior() {
    return (
        <NavLink to={PATH.JUNIOR} id={'hw5-page-junior'}>
            {/*<HW6 />*/}
            {/*<HW7 />*/}
            {/*<HW8 />*/}
            {/*<HW9 />*/}
        </NavLink>
    )
}

export default Junior
