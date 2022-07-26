import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

export const Slider = ()=>{
    return(   <AwesomeSlider cssModule={AwesomeSliderStyles}>
        <div data-src="assets/spider.jpeg" />
        <div data-src="assets/spider.jpeg" />
        <div data-src="assets/spider.jpeg" />
    </AwesomeSlider>
    );
}