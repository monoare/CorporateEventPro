import { Map, Marker, ZoomControl } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";

const Location = () => {
  return (
    <div className="h-full flex">
      <Map
        provider={osm}
        height={500}
        defaultCenter={[50.879, 4.6997]}
        defaultZoom={11}
      >
        <Marker width={50} anchor={[50.879, 4.6997]} />
        <ZoomControl />
      </Map>
      <div className="flex flex-col bg-[#333333] text-white">
        <h1>Main venue</h1>
        <p>Las Vegas Conference Hall</p>
        <hr />
        <p>
          Events are held in the Main hall, workshops in Second floor meeting
          rooms
        </p>
        <hr />
        <p>Address</p>
        <hr />
        <p>32216 Hallowd road, New Arlington, Nexes</p>
        <p>Phone </p>
        <hr />
        <p>+ 1 555 2367890</p>
        <hr />
        <p>Email</p>
        <hr />
        <p>mail@bold-themes.com</p>
      </div>
    </div>
  );
};

export default Location;
