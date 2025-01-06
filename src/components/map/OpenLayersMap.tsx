import { Map, View } from "ol"; // 지도와 뷰 구성 요소
import TileLayer from "ol/layer/Tile"; // 타일 레이어
import "ol/ol.css"; // OpenLayers 기본 스타일
import { fromLonLat, toLonLat } from "ol/proj"; // 좌표 변환 함수
import OSM from "ol/source/OSM"; // OSM 타일 소스
import React, { useEffect, useRef, useState } from "react";

const OpenLayersMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null); // 지도가 렌더링될 DOM 참조
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_coordinates, setCoordinates] = useState<[number, number] | null>(
    null
  );

  useEffect(() => {
    if (!mapRef.current) return;

    // 지도 초기화
    const map = new Map({
      target: mapRef.current, // 지도를 렌더링할 DOM 요소
      layers: [
        new TileLayer({
          source: new OSM(), // OSM 타일 소스
        }),
      ],
      view: new View({
        center: fromLonLat([126.97718317377554, 37.55555789921969]), // 초기 중심 좌표 (경도, 위도)
        zoom: 10, // 초기 줌 레벨
      }),
    });

    console.log("map >>", map);

    map.on("click", (event) => {
      console.log("event >>", event);
      const coordinate = toLonLat(event.coordinate);
      setCoordinates([coordinate[0], coordinate[1]]);
      console.log("Clicked at:", coordinate);
    });

    // 컴포넌트가 언마운트될 때 지도를 정리
    return () => {
      map.setTarget(undefined);
    };
  }, []);

  console.log("mapRef >>", mapRef);

  return (
    <>
      <div
        ref={mapRef}
        style={{
          width: "100%",
          height: "100%", // 지도의 높이 설정
        }}
      />
    </>
  );
};

export default OpenLayersMap;
