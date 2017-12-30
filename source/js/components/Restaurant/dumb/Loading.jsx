import React from 'react'

var blooprintImage = require('../../../../assets/img/blooprint.png')

const Loading = (props) => {
    return (
        <div id="loader">
            <p className="center_menu_loading">loading <img className="center_menu_loading" id="loading_tm" src={blooprintImage} alt="blooprint" /></p>
            <p className="center_menu_loading">menu listing</p>
            <p id="loading_cursor" className="center_menu_loading">....</p>
        </div>
    )
}
export default Loading
