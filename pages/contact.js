import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Image, Flex, Text, Box, Tooltip } from "@chakra-ui/react"
import Footer from "../components/Footer";
import Link from 'next/link'
import Header from '../components/Header'

const libraries = ["places"];
const mapContainerStyle = {
  height: "50vh",
  width: "50vw",
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 22.2874245,
  lng: 114.1460504
};

export default function Contact() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    libraries,
  });
  const [markers, setMarkers] = React.useState([{ lat: 22.2874245, lng: 114.1460504 }]);
  const [selected, setSelected] = React.useState(null);

  const onMapClick = React.useCallback((e) => {
    console.log("onMapClick", e)
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <Header />
      <Flex align="center" justify="center" direction="column" background="#d3d3d3">
        <Flex
          minH="100vh"
          minW="70vw"
          align="center"
          justify="center"
          direction="column"
          background="white"
          padding="10px"
          boxShadow="dark-lg"
          margin="2.5rem"
          padding="2.5rem"
          boxShadow="dark-lg"
        >
          <Image src="https://tecky.io/static/fffac7fa9bb167e4758e84672725e9b0/a8344/logo_title.png" alt="Tecky" />
          <Flex
            h="30vh"
            w="40vw"
            align="center"
            justify="center"
            direction="column"
          >
            <Flex
              align="center"
              justify="center"
              direction="column"
            >
              <Text fontSize="3xl" align="center" justify="center">
                Office Address:
            </Text>
              <Text fontSize="1xl" align="center" justify="center">
                Suite C-E, 11th Floor, Golden Sun Centre
                59-67 Bonham Strand West, Sheung Wan
            </Text>
              <Text fontSize="1xl" align="center" justify="center">
                Office Tel: 2123 4567
              </Text>
              <Text fontSize="1xl" align="center" justify="center">
                Mobile: 9123 4567
              </Text>
            </Flex>
          </Flex>

          <GoogleMap
            id="map"
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={center}
            options={options}
            onClick={onMapClick}
            onLoad={onMapLoad}
            onZoomChanged={() => console.log("onZoomChanged", mapRef?.current?.zoom)}
          >
            {markers.map((marker) => (
              <Marker
                key={`${marker.lat}-${marker.lng}--${marker.time}--${Math.random()}`}
                position={{ lat: marker.lat, lng: marker.lng }}
                onClick={() => {
                  setSelected(marker)
                }}
              />
            ))}
            {selected ? (
              <InfoWindow
                position={{ lat: selected.lat, lng: selected.lng }}
                onCloseClick={() => {
                  setSelected(null);
                }}
              >
                <div>
                  <Image h="50px" w="auto" src="https://tecky.io/static/fffac7fa9bb167e4758e84672725e9b0/a8344/logo_title.png" alt="office" />
                  <h2>
                    Office: 2123 4567
                    <br></br>
                    Mobile: 9999 9999
                  </h2>
                </div>
              </InfoWindow>
            ) : null}

          </GoogleMap>
          <Link href="/">
            <a>
              <Tooltip label="Home" aria-label="A tooltip to home">
                <Image
                  marginTop="30px"
                  w="30px"
                  h="30px"
                  src="home-button.svg"
                />
              </Tooltip>
            </a>
          </Link>
        </Flex>
      </Flex>
      <Footer />
    </div>
  )
}