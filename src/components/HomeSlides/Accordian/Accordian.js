import React, { useState } from 'react';

const Accordian = ({disable = false, title, content, wrapper_class_name = "acc-wrapper", button_class_name = "acc-button", title_class_name = "acc-title", content_class_name = 'acc-content' }) =>
{
    const [visible, SetVisible] = useState(false);

    return(
        <>{!disable &&
        <div onClick = {() => SetVisible(!visible)} className = {wrapper_class_name}>
            <div className = {title_class_name}>
                {title}
            </div>
            <div className = {button_class_name}>
                {visible ? '-' : '+'}
            </div>
            {visible && <div className = {content_class_name}>{content}</div>}
        </div>}
        </>
    )
}

export default Accordian