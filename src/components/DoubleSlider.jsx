import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import { useEffect, useRef, useState } from "react";

function DoubleSlider({ min = 0, max = 100, onChange }) {
  const sliderRef = useRef(null);
  const [currentValues, setCurrentValues] = useState([min, max]);

  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = noUiSlider.create(sliderRef.current, {
      start: [min, max],
      connect: true,
      range: {
        min,
        max,
      },
    });

    slider.on("update", (newValues) => {
      const parsed = newValues.map((val) => Math.round(val));
      setCurrentValues(parsed);
      onChange(parsed);
    });

    return () => {
      slider.destroy();
    };
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      const sliderInstance = sliderRef.current.noUiSlider;
      if (sliderInstance) {
        sliderInstance.updateOptions({
          range: { min, max },
          start: [min, max],
        });
      }
    }
    setCurrentValues([min, max]);
  }, [min, max]);

  return (
    <div>
      <span>
        Range: ${currentValues[0]} - ${currentValues[1]}
      </span>
      <div
        className="
          mt-5
          [&_.noUi-target]:h-1
          [&_.noUi-target]:bg-gray-300
          [&_.noUi-target]:rounded-full
          [&_.noUi-target]:border-0
          [&_.noUi-target]:p-0
          [&_.noUi-target]:m-0
          [&_.noUi-target]:shadow-none

          [&_.noUi-base]:h-1
          [&_.noUi-origin]:h-1
          [&_.noUi-connect]:h-1
          [&_.noUi-connect]:bg-blue-600

          [&_.noUi-handle]:bg-white
          [&_.noUi-handle]:border-2
          [&_.noUi-handle]:border-blue-600
          [&_.noUi-handle]:rounded-full
          [&_.noUi-handle]:w-4
          [&_.noUi-handle]:h-4
          [&_.noUi-handle]:shadow-none
        "
        ref={sliderRef}
      ></div>
    </div>
  );
}

export default DoubleSlider;
