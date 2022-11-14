import { useState, useEffect } from "react";
import {withRouter} from 'react-router-dom'


function ScrollPage(pathname){
    const {pathname} = useState();

    useEffect(() => {
        window.scrollTo(pathname);
    })
}

export default withRouter(ScrollPage)
