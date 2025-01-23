import React from "react";
import { IoIosBatteryDead, IoIosBatteryFull } from "react-icons/io";

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
                            <IoIosBatteryFull />
                        ) : batteryLevel > 50 ? (
                            <IoIosBatteryFull />
                        ) : batteryLevel > 25 ? (
                            <IoIosBatteryDead />
                        ) : (
                            <IoIosBatteryDead />
                        )}
                    </span>
                </div>
            ) : (
                <IoIosBatteryDead />
            )}
        </div>
    );
}
