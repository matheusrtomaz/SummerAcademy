import React from "react";
import { LuBattery, LuBatteryFull, LuBatteryLow, LuBatteryMedium, LuBatteryWarning } from "react-icons/lu";

export function Batery() {
    const [batteryLevel, setBatteryLevel] = React.useState(null);

    React.useEffect(() => {
        navigator.getBattery().then((battery) => {
            function updateBatteryStatus() {
                setBatteryLevel(Math.floor(battery.level * 100));
            }

            updateBatteryStatus();
            battery.addEventListener("levelchange", updateBatteryStatus);

            return () => {
                battery.removeEventListener("levelchange", updateBatteryStatus);
            };
        });
    }, []);

    return (
        <div>
            {batteryLevel !== null ? (
                <div>
                    <span>
                        {batteryLevel > 75 ? (
                            <LuBatteryFull />
                        ) : batteryLevel > 50 ? (
                            <LuBatteryMedium />
                        ) : batteryLevel > 25 ? (
                            <LuBatteryLow />
                        ) : (
                            <LuBattery />
                        )}
                    </span>
                </div>
            ) : (
                <LuBatteryWarning />
            )}
        </div>
    );
}
