import {useState, useEffect} from "react";
import mapLeaf from "leaflet";

export default function MumbaiMap() {
    const [, setMap] = useState(null);
    useEffect(() => {
        const map = mapLeaf.map("mapContainer").setView([19.07, 72.88], 11);
        mapLeaf.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 20,
        }).addTo(map);
        setMap(map);
        return () => {
            map.remove();
        };
    }, []);
    return <div id={"mapContainer"} />;
}
