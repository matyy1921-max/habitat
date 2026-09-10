"use client";

import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useEffect, useMemo } from "react";
import type { Property } from "@/data/properties";

type LeafletMapProps = {
  properties: Property[];
  activePropertyId: string;
  onActivePropertyChange: (propertyId: string) => void;
};

const buenosAiresCenter: [number, number] = [-34.589, -58.43];

export default function LeafletMap({
  properties,
  activePropertyId,
  onActivePropertyChange
}: LeafletMapProps) {
  const activeProperty = properties.find(
    (property) => property.id === activePropertyId
  );

  return (
    <MapContainer
      center={buenosAiresCenter}
      zoom={13}
      scrollWheelZoom={false}
      className="h-full min-h-[460px] w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {activeProperty ? <MapPanner property={activeProperty} /> : null}
      {properties.map((property) => (
        <PropertyMarker
          property={property}
          active={activePropertyId === property.id}
          onActivate={() => onActivePropertyChange(property.id)}
          key={property.id}
        />
      ))}
    </MapContainer>
  );
}

type MapPannerProps = {
  property: Property;
};

function MapPanner({ property }: MapPannerProps) {
  const map = useMap();

  useEffect(() => {
    if (property.latitude && property.longitude) {
      map.panTo([property.latitude, property.longitude], {
        animate: true,
        duration: 0.65
      });
    }
  }, [map, property.latitude, property.longitude]);

  return null;
}

type PropertyMarkerProps = {
  property: Property;
  active: boolean;
  onActivate: () => void;
};

function PropertyMarker({ property, active, onActivate }: PropertyMarkerProps) {
  const icon = useMemo(
    () =>
      L.divIcon({
        className: "",
        html: `<div class="habitat-map-marker ${
          active ? "is-active" : ""
        }" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M4.75 20.25h14.5M6.75 20.25V5.75a1 1 0 0 1 1-1h8.5a1 1 0 0 1 1 1v14.5M9 8.25h1.5M13.5 8.25H15M9 11.5h1.5M13.5 11.5H15M9 14.75h1.5M13.5 14.75H15" />
          </svg>
        </div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -18]
      }),
    [active]
  );

  if (!property.latitude || !property.longitude) {
    return null;
  }

  return (
    <Marker
      position={[property.latitude, property.longitude]}
      icon={icon}
      eventHandlers={{
        click: (event) => {
          onActivate();
          event.target.openPopup();
        },
        mouseover: (event) => {
          onActivate();
          event.target.openPopup();
        }
      }}
    >
      <Popup className="habitat-map-popup" closeButton={false}>
        <div className="w-48 bg-ivory text-ink">
          <p className="text-sm font-medium">{property.title}</p>
          <p className="mt-1 text-xs leading-5 text-muted">{property.address}</p>
          <p className="mt-3 text-sm font-medium">
            {property.currency} {property.price.toLocaleString("es-AR")} / mes
          </p>
        </div>
      </Popup>
    </Marker>
  );
}
