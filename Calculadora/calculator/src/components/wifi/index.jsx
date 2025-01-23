import React from "react";

export function Wifi() {
    const [wifiSignal, setWifiSignal] = React.useState(null);

    React.useEffect(() => {
        function updateWifiSignal() {
            // Simulating WiFi signal strength for demonstration purposes
            const signalStrength = Math.floor(Math.random() * 100);
            setWifiSignal(signalStrength);
        }

        const interval = setInterval(updateWifiSignal, 5000);
        updateWifiSignal();

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {wifiSignal !== null ? (
                <div>
                    <span>
                        {wifiSignal > 75 ? <i class='bx bx-wifi'></i> : wifiSignal > 50 ? <i class='bx bx-wifi-2' ></i> : wifiSignal > 25 ? <i class='bx bx-wifi-1' ></i> : <i class='bx bx-wifi-0'></i>}
                    </span>
                    <span>{`${wifiSignal}%`}</span>
                </div>
            ) : (
                <i class='bx bx-wifi-off' ></i>
            )}
        </div>
    );
}