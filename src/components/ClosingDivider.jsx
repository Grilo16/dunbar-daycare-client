import {ReactComponent as ClosingDividerSVG} from "../static/ClosingDivider.svg"

const ClosingDivider = ({fill}) => {


    return (

        <ClosingDividerSVG fill={fill ? fill : "#DEAF94"}/>
    )
};

export default ClosingDivider;

