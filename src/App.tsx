import { useState } from "react";
import Wheel from "../lib/components/Wheel";

function App() {
  const options = [
    {
      color: "#f00",
      text: "10% OFF",
      // image: "https://picsum.photos/id/28/512",
      showTextOverImage: true,
    },
    {
      color: "#0f0",
      text: "Rs100 OFF",
      // image: "https://picsum.photos/id/29/512",
      showTextOverImage: true,
    },
    {
      color: "#00f",
      text: "Lucky Coupon",
      // image: "https://picsum.photos/id/30/512",
      showTextOverImage: true,
    },
    {
      color: "#000",
      text: "No Luck",
      // image: "https://picsum.photos/id/31/512",
      showTextOverImage: true,
    },
    {
      color: "#f00",
      text: "50% OFF",
      // image: "https://picsum.photos/id/32/512",
      showTextOverImage: true,
    },
    {
      color: "#0f0",
      text: "80% OFF",
      // image: "https://picsum.photos/id/33/512",
      showTextOverImage: true,
    },
    {
      color: "#00f",
      text: "100% OFF",
      // image: "https://picsum.photos/id/34/512",
      showTextOverImage: true,
    },
    {
      color: "#000",
      text: "Free Delivery",
      // image: "https://picsum.photos/id/35/512",
      showTextOverImage: true,
    },
  ];

  const [shouldSpin, setShouldSpin] = useState(false);

  return (
    <>
      <button onClick={() => setShouldSpin(true)}>Spin</button>
      <Wheel
        innerRadius={36}
        outerRadius={300}
        innerColor={"#fff"}
        outerColor={"pink"}
        innerBorderWidth={5}
        outerBorderWidth={10}
        dividerWidth={5}
        innerBorderColor={"#fff"}
        outerBorderColor={"#555"}
        dividerColor={"white"}
        options={options}
        stopIndex={Math.floor(Math.random() * options.length)}
        onSpinEnd={(_index) => {
          setShouldSpin(false);
        }}
        shouldSpin={shouldSpin}
        textColor={"white"}
        textDistanceFromCenter={48}
        centerText="VTPL"
        centerImage="https://picsum.photos/id/27/512"
        showCenterTextOverImage={true}
        textFontSize={30}
        centerTextFontSize={20}
      />
    </>
  );
}

export default App;
