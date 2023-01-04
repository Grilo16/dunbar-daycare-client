import {ReactComponent as SectionDividerSVG} from "../static/SectionDivider.svg"

const SectionDivider = ({fill}) => {


    return (

        <SectionDividerSVG fill={fill ? fill : "#DEAF94"}/>
    )
};

export default SectionDivider;

