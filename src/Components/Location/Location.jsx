import { Map, Marker, ZoomControl } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";

const Location = () => {
  const color = `#E30E31`;
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-[80vw] h-[400px] md:h-screen md:w-2/3 lg:w-full mx-4">
        <div style={{ height: "100%" }}>
          <Map
            provider={osm}
            height={null}
            defaultCenter={[32.705002, -97.12278]}
            defaultZoom={11}
          >
            <Marker width={50} anchor={[32.705002, -97.12278]} color={color} />
            <ZoomControl />
          </Map>
        </div>
      </div>
      <div className="flex flex-col bg-[#333333] text-white lg:w-1/3">
        <div className="px-4 mb-4 md:mb-0 md:mx-0 md:m-10">
          <h1 className="text-[#E30E31] text-lg mt-5 md:mt-0">Main venue</h1>
          <p className="text-xl lg:text-5xl text-white font-bold max-w-fit border-b-[#E30E31] border-b-4 pb-4">
            Las Vegas Conference Hall
          </p>

          <p className="md:text-xl mb-6">
            Events are held in the Main hall, workshops in Second floor meeting
            rooms
          </p>

          <p className="md:text-2xl max-w-fit border-b-[#E30E31] border-b-4">
            Address
          </p>
          <p className="mb-6">32216 Hallowd road, New Arlington, Texas</p>
          <p className="md:text-2xl max-w-fit border-b-[#E30E31] border-b-4">
            Phone
          </p>
          <p className="mb-6">+ 1 555 2367890</p>

          <p className="md:text-2xl max-w-fit border-b-[#E30E31] border-b-4">
            Email
          </p>

          <p>mail@bold-themes.com</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
