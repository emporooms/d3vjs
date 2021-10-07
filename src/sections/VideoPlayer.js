import { useRef } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";
const VideoPlayer = () => {
  const videoRef = useRef();
  return (
    <CloudinaryContext cloud_name="ddmicavsa">
      <div>
        <Video
          publicId="https://res.cloudinary.com/ddmicavsa/image/upload/v1633624614/room_gif_qi2077.gif"
          width="100%"
          autoPlay
          loop={false}
          innerRef={videoRef}

          style={{ borderRadius: "10px"}}
        />
      </div>
    </CloudinaryContext>
  );
};
export default VideoPlayer;