import * as React from "react";
import Header from "./components/Header";
import BasicCard from "./components/BasicCard";
import Signin from "./components/Signin";
import "./App.css";
import Switch from "./components/Switch";
import Slider from "./components/Slider";
import Select from "./components/Select";
export default function App() {
  const [isLogged, setIsLogged] = React.useState(false);
  const [isOnline, setIsOnline] = React.useState(false);
  const [volume, setVolume] = React.useState(20);
  const [quality, setQuality] = React.useState(2);
  return (
    <>
      <Header />
      {isLogged === false ? (
        <>
          <div className="card_container">
            <BasicCard
              title="Online Mode"
              description="Is this Application Connected To The Internet"
              component={Switch}
              state={isOnline}
              setState={setIsOnline}
            />
            <BasicCard
              title="Master Volume"
              description="Over rised all other sound settings in this application"
              component={Slider}
              state={volume}
              setState={setVolume}
            />
            <BasicCard
              title="Sound Quality"
              description="manualy controls the music quality in event of poor connection"
              component={Select}
              state={quality}
              setState={setQuality}
            />
          </div>
          <h1>System Notification</h1>
          {!isOnline && (
            <p>
              Your application is offline. You won't be able to share or stream
              music to other devices.
            </p>
          )}
          {volume >= 80 && (
            <p>
              Listening to music at a high volume could cause long-term hearing
              loss.
            </p>
          )}
          {quality < 2 && (
            <p>
              Music quality is degraded. Increase quality if your connection
              allows it.
            </p>
          )}
        </>
      ) : (
        <Signin setIsLogged={setIsLogged} />
      )}
    </>
  );
}
