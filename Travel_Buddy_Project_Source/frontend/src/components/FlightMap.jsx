"use client";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocalStorageAirports } from "@/redux/slices/localStorageAirportsSlice";
import { landmarksGeoJSON } from "@/utils/all-landmark-location";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const FlightMap = ({ routes, setSelectedAirport }) => {
  const mapContainerRef = useRef(null);
  const dispatch = useDispatch();
  const airportData = useSelector((state) => state.localStorageAirports.data);

  useEffect(() => {
    const loadAirportsData = () => {
      const allAirportsDataMain = localStorage.getItem("allAirportsDataMain");
      if (allAirportsDataMain) {
        const parsedData = JSON.parse(allAirportsDataMain);
        dispatch(setLocalStorageAirports(parsedData));
      }
    };
    loadAirportsData();
  }, [dispatch]);

  useEffect(() => {
    if (!airportData) return;

    const airportGeoJSON = {
      type: "FeatureCollection",
      features: airportData.map((airport) => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
            parseFloat(airport.longitude),
            parseFloat(airport.latitude),
          ],
        },
        properties: {
          ...airport,
          id: airport.id,
          name: airport.name,
          city: airport.city,
          country: airport.country,
        },
      })),
    };

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-98.35, 39.5],
      zoom: 2,
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("load", () => {
      map.addSource("airports", {
        type: "geojson",
        data: airportGeoJSON,
        cluster: true,
        clusterMaxZoom: 8,
        clusterRadius: 75,
      });

      map.addLayer({
        id: "clusters",
        type: "circle",
        source: "airports",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": [
            "step",
            ["get", "point_count"],
            "#51bbd6",
            100,
            "#f1f075",
            750,
            "#f28cb1",
          ],
          "circle-radius": [
            "step",
            ["get", "point_count"],
            15,
            100,
            20,
            750,
            30,
          ],
        },
      });

      map.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "airports",
        filter: ["has", "point_count"],
        layout: {
          "text-field": "{point_count_abbreviated}",
          "text-size": 12,
        },
      });

      map.addLayer({
        id: "unclustered-point",
        type: "symbol", // Use symbol for icons
        source: "airports",
        filter: ["!", ["has", "point_count"]],
        layout: {
          "icon-image": "airport-15", // Use the airport icon
          "icon-size": 1.2, // Adjust the icon size
          "text-field": ["get", "name"], // Optional: Display airport names
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 1.5],
          "text-anchor": "top",
          "text-size": 12,
        },
        // paint: {
        //   "text-color": "#333",
        //   "text-halo-color": "#ffffff",
        //   "text-halo-width": 1,
        //   "text-halo-blur": 1,
        // },
        minzoom: 0, // Ensure it is visible from the minimum zoom level
        maxzoom: 22, // Ensure it remains visible at all zoom levels
      });

      map.addLayer({
        id: "airport-labels",
        type: "symbol",
        source: "airports",
        filter: ["!", ["has", "point_count"]],
        layout: {
          "text-field": ["get", "name"],
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 1.5],
          "text-anchor": "top",
          "text-size": 12,
        },
        paint: {
          "text-color": "#333",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1,
          "text-halo-blur": 1,
        },
        minzoom: 8, // Adjust this zoom level as desired
      });

      map.addSource("landmarks", {
        type: "geojson",
        data: landmarksGeoJSON,
        cluster: true,
        clusterMaxZoom: 8,
        clusterRadius: 75,
      });

      map.addLayer({
        id: "landmarks",
        type: "symbol",
        source: "landmarks",
        layout: {
          "icon-image": ["get", "icon"], // Dynamically fetch the icon name
          "icon-size": 1.5,
          "text-field": ["get", "name"],
          "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
          "text-offset": [0, 1.2],
          "text-anchor": "top",
          "text-size": 12,
        },
      });

      map.on("click", "unclustered-point", (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const { id, name, city, country } = e.features[0].properties;

        setSelectedAirport(e.features[0].properties);

        new mapboxgl.Popup({
          offset: 15,
          closeButton: false,
          className: "airport-popup",
        })
          .setLngLat(coordinates)
          .setHTML(
            `
            <div style="text-align:center;">
              <strong style="font-size: 14px;">${name}</strong><br>
              <span style="font-size: 12px; color: #666;">${city}, ${country}</span>
            </div>
          `
          )
          .addTo(map);
      });

      map.on("click", "clusters", (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ["clusters"],
        });
        const clusterId = features[0].properties.cluster_id;
        map
          .getSource("airports")
          .getClusterExpansionZoom(clusterId, (err, zoom) => {
            if (err) return;
            map.easeTo({
              center: features[0].geometry.coordinates,
              zoom: zoom,
            });
          });
      });

      map.on("click", "landmarks", (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const { name, description, wikipedia } = e.features[0].properties;

        new mapboxgl.Popup({
          offset: 15,
          closeButton: true,
          className: "landmark-popup",
        })
          .setLngLat(coordinates)
          .setHTML(
            `
      <div style="text-align:center;">
        <strong style="font-size: 14px; color:#262626">${name}</strong><br>
        <span style="font-size: 12px; color: #666;">${description}</span><br>
        <a href="${wikipedia}" target="_blank" style="font-size: 12px; color: #007bff; text-decoration: underline;">Read more on Wikipedia</a>
      </div>
      `
          )
          .addTo(map);
      });

      // Add hover event for landmarks
      map.on("mouseenter", "landmarks", () => {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseleave", "landmarks", () => {
        map.getCanvas().style.cursor = "";
      });

      if (routes && routes.length > 0) {
        map.addSource("flight-route", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: routes.map((route) => ({
              type: "Feature",
              geometry: {
                type: "LineString",
                coordinates: [
                  [
                    parseFloat(route.departureLongitude),
                    parseFloat(route.departureLatitude),
                  ],
                  [
                    parseFloat(route.destinationLongitude),
                    parseFloat(route.destinationLatitude),
                  ],
                ],
              },
            })),
          },
        });

        map.addLayer({
          id: "flight-route",
          type: "line",
          source: "flight-route",
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#888",
            "line-width": 4,
          },
        });
      }
    });

    return () => map.remove();
  }, [airportData, routes, setSelectedAirport]);

  return (
    <div className="border rounded-md overflow-hidden">
      <div ref={mapContainerRef} style={{ width: "100%", height: "400px" }} />
    </div>
  );
};

export default FlightMap;