import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loader from "../Loader";

const Year = () => {
    const [fetchData, setFetchData] = useState({});
    const [loader, setLoader] = useState(false)
    const [dateCount, setDateCount] = useState([])
    const getData = async () => {
        try {
            setLoader(true)
            const response = await axios.get('https://dpg.gg/test/calendar.json');
            const{data} = await response
            const dataArray = Object.entries(data).map(([date, count]) => ({ date, count }))
            setDateCount(dataArray)
            setFetchData(data);
            setLoader(false)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);
    console.log(dateCount.slice(0, 1).map(el => el.date))
    const renderCalendar = () => {
        const startDate = new Date(dateCount.slice(0, 1).map(el => el.date));
        const endDate = new Date(dateCount.slice(-1).map(el => el.date));
        const calendar = [];
        let currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            const dateString = currentDate.toISOString().slice(0, 10); // Convert date to YYYY-MM-DD format
            const count = fetchData[dateString] || 0; // Get count for the date, default to 0 if not found

            calendar.push(
                    <div key={dateString}  className="calendar-day">
                        <button className="calendar_btn" style={{
                            background: count === 0 ? 'transparent' : count > 0 && count <10 ? '#ACD5F2'
                                : count > 9 && count < 20 ? '#7FA8C9' :
                                    count > 19 && count < 30 ? '#527BA0'
                                   : '#254E77',
                        }}> <span style={{display: 'none'}}>{dateString.slice(-2)}{count}</span></button>

                    </div>
            );

            currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
        }

        return calendar;
    };

    return (
        <div className="data" >
            {loader && <Loader/>}
            <button style={{
                margin: '6px 1px 1px 1px',
            }}></button>
            {renderCalendar()}
        </div>
    );
};

export default Year;