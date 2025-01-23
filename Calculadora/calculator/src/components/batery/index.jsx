import React from "react";

export function Batery() {
    const [batteryLevel, setBatteryLevel] = React.useState(null);

    React.useEffect(() => {
        navigator.getBattery().then(battery => {
            function updateBatteryStatus() {
                setBatteryLevel(Math.floor(battery.level * 100));
            }

            updateBatteryStatus();
            battery.addEventListener('levelchange', updateBatteryStatus);

            return () => {
                battery.removeEventListener('levelchange', updateBatteryStatus);
            };
        });
    }, []);

    return (
        <div>{batteryLevel !== null ? `${batteryLevel}%` : 'Loading...'}</div>
    );
}