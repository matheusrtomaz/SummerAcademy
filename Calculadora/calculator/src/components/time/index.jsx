import React from "react";

export function Time() {
const [currentTime, setCurrentTime] = React.useState(new Date().toLocaleTimeString());

React.useEffect(() => {
    const timer = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);

    return () => clearInterval(timer);
}, []);

return (
    <div>{currentTime}</div>
);
}