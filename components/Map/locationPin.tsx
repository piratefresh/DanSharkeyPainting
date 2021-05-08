import Pin from "../common/icons/pin";

type Props = {
  text: string;
  lat: number;
  lng: number;
};

const LocationPin = ({ text, lat, lng }) => (
  <div className="pin">
    <Pin />
    <p className="pin-text">{text}</p>
  </div>
);

export default LocationPin;
