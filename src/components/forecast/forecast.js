import React from "react";
import {
    Accordion,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItem,
    AccordionItemButton
} from 'react-accessible-accordion';
import "./forecast.css";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({data}) => {
    if (!data || !data.list) {
        return null;
    }
    const dayInWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek));

    return (
    <>
        <label className="title">Daily</label>
        <Accordion allowZeroExpanded>
            {data.list.splice(0, 7).map((item, index) => (
            <AccordionItem key={index}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <div className="daily-item">
                            <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                            <label className="day">{forecastDays[index]}</label>
                            <label className="description">{item.weather[0].description}</label>
                            <label className="min-max">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel></AccordionItemPanel>
            </AccordionItem>
            ))}
        </Accordion>
    </>
    )
};
export default Forecast;