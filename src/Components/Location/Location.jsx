import { Map, Marker, ZoomControl } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";

const Location = () => {
  const color = `#E30E31`;
  return (
    <div className="h-full flex">
      <Map
        provider={osm}
        height={630}
        defaultCenter={[50.879, 4.6997]}
        defaultZoom={11}
      >
        <Marker width={50} anchor={[50.879, 4.6997]} color={color} />
        <ZoomControl />
      </Map>
      <div className="flex flex-col bg-[#333333] text-white w-1/3">
        <div className="m-10">
          <h1 className="text-[#E30E31] text-lg">Main venue</h1>
          <p className="text-5xl text-white font-bold max-w-fit border-b-[#E30E31] border-b-4 pb-4">
            Las Vegas Conference Hall
          </p>

          <p className="text-xl mb-6">
            Events are held in the Main hall, workshops in Second floor meeting
            rooms
          </p>

          <p className="text-2xl max-w-fit border-b-[#E30E31] border-b-4">
            Address
          </p>
          <p className="mb-6">32216 Hallowd road, New Arlington, Nexes</p>
          <p className="text-2xl max-w-fit border-b-[#E30E31] border-b-4">
            Phone
          </p>
          <p className="mb-6">+ 1 555 2367890</p>

          <p className="text-2xl max-w-fit border-b-[#E30E31] border-b-4">
            Email
          </p>

          <p>mail@bold-themes.com</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
