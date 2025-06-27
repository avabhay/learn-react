import { useEffect, useState } from "react";

const Clock = ({ color }) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div>
            <h2>Current Time</h2>
            <p style={{ color: color, width: "200px", borderColor: "black", borderStyle: "solid",backgroundColor:"white",padding:"5px" }}>{time}</p>
        </div>
    );
}
export default Clock; // This is a simple Clock component that displays the current time.
    