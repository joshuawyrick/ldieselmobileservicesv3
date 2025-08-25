
'use client';

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { locations } from '@/lib/data';
import React from 'react';

// Fix for default icon issue with webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Hardcoded coordinates for locations
const locationCoordinates: { [key: string]: [number, number] } = {
    '/san-luis-obispo-ca': [35.2828, -120.6596],
    '/paso-robles-ca': [35.6266, -120.691],
    '/pismo-beach-ca': [35.1428, -120.6411],
    '/nipomo-ca': [35.043, -120.4755],
    '/arroyo-grande-ca': [35.1186, -120.5907],
    '/atascadero-ca': [35.4894, -120.6708],
    '/avila-beach-ca': [35.1805, -120.7302],
    '/cambria-ca': [35.5641, -121.0829],
    '/cayucos-ca': [35.4497, -120.8929],
    '/creston-ca': [35.5169, -120.5188],
    '/grover-beach-ca': [35.1216, -120.6213],
    '/los-osos-ca': [35.313, -120.8349],
    '/morro-bay-ca': [35.3658, -120.8499],
    '/oceano-ca': [35.0991, -120.6135],
    '/santa-margarita-ca': [35.3941, -120.6121],
    '/shandon-ca': [35.6563, -120.3752],
    '/templeton-ca': [35.5539, -120.7099],
    '/santa-maria-ca': [34.953, -120.4358],
    '/buellton-ca': [34.6144, -120.1938],
    '/guadalupe-ca': [34.9686, -120.5735],
    '/lompoc-ca': [34.6392, -120.4579],
    '/orcutt-ca': [34.8694, -120.4282],
    '/santa-ynez-ca': [34.6122, -120.0882],
    '/solvang-ca': [34.593, -120.1376],
};


export default function InteractiveMap() {
    const center: [number, number] = [35.2, -120.5];

    return (
        <MapContainer center={center} zoom={9} scrollWheelZoom={false} className="h-[500px] w-full rounded-2xl shadow-card border-2 border-foreground">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location) => {
                const position = locationCoordinates[location.url];
                if (!position) return null;
                return (
                    <Marker key={location.url} position={position}>
                        <Popup>
                            <h4 className="font-bold">{location.name}</h4>
                            <a href={`/locations${location.url}`} className="text-primary hover:underline">
                                View Service Details
                            </a>
                        </Popup>
                    </Marker>
                )
            })}
        </MapContainer>
    );
}
