import React from "react";
import PropTypes from "prop-types";

function Menubar(props) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}

/*default olarak hangi parametrelerin hangi tipte zorunlu veya zorunsuz gönderilmesi gerektiğini belirledik*/
Menubar.propTypes = {
    title : PropTypes.string.isRequired
}

/*eğer gönderilmesi gereken ancak gönderilmeyen bir parametre varsa default değer belirledik*/
Menubar.defaultProps = {
    title : "Default Text"
}

export default Menubar;
