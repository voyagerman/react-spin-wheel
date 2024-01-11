export interface WheelProps {
    innerRadius: number;
    outerRadius: number;
    innerColor: string;
    outerColor: string;
    innerBorderWidth: number;
    outerBorderWidth: number;
    dividerWidth: number;
    innerBorderColor: string;
    outerBorderColor: string;
    dividerColor: string;
    options: OptionProps[];
    stopIndex: number;
    onSpinEnd?: (index: number) => void;
    shouldSpin?: boolean;
    textColor?: string;
    textFontSize?: number;
    textDistanceFromCenter?: number;
    centerText?: string;
    centerImage?: string;
    showCenterTextOverImage?: boolean;
    centerTextFontSize?: number;
}
export interface OptionProps {
    color: string;
    text: string;
    image?: string;
    showTextOverImage?: boolean;
    textColor?: string;
    textFontSize?: number;
}
declare const Wheel: ({ innerRadius, outerRadius, innerColor, innerBorderWidth, outerBorderWidth, dividerWidth, innerBorderColor, outerBorderColor, dividerColor, options, stopIndex, onSpinEnd, shouldSpin, textColor, textFontSize, textDistanceFromCenter, centerText, centerImage, showCenterTextOverImage, centerTextFontSize, }: WheelProps) => import("react/jsx-runtime").JSX.Element;
export default Wheel;
