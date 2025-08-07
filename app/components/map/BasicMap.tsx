import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

/**
 * Custom Leaflet icon configuration for map markers.
 * Uses default Leaflet assets with retina and shadow support.
 */
const customIcon = L.icon({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface BasicMapProps {
  lat: number;
  lng: number;
  popuoMsg: string;
}
/**
 * A simple Leaflet map component using react-leaflet.
 * Displays a map centered at the given coordinates with a marker and popup.
 *
 *
 * @param {BasicMapProps} props - Props containing coordinates and popup message.
 * @returns {JSX.Element} A styled interactive map.
 */
export default function BasicMap({ lat, lng, popuoMsg }: BasicMapProps) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={17}
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[lat, lng]} icon={customIcon}>
        <Popup>{popuoMsg}</Popup>
      </Marker>
    </MapContainer>
  );
}
