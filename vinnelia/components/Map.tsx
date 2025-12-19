"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

export default function MapComponent() {
const position: [number, number] = [-7.9990542, 112.636498]


  return (
        <div className="overflow-hidden rounded-2xl shadow-lg">
        <MapContainer
            center={position}
            zoom={16}
            scrollWheelZoom={false}
            style={{ height: "380px", width: "100%" }}
        >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            <strong>Lokasi Acara 💍</strong>
            <br />
            Gereja GKIN Getsmani
            <br />
            <a
              href={`https://www.google.com/maps?q=${position[0]},${position[1]}`}
              target="_blank"
              className="text-blue-600 underline"
            >
              Buka di Google Maps
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
