import React from 'react';
import { useSnapshot } from 'valtio';
import { SketchPicker } from 'react-color';
import state from '../../store';

const fonts = [
  "Arial",
  "Times New Roman",
  "Segoe UI",
  "Tahoma",
  "Calibri",
  "Frutiger",
  "Helvetica",
  "Futura PT",
  "Myriad Pro",
  "Open Sans",
  "Roboto",
  "Verdana",
  "Adobe Arabic",
  "Droid Arabic Naskh",
  "GE SS Unique Light",
  "Simplon Norm Arabic",
  "Neue Helvetica Arabic",
  "Noto Naskh Arabic",
  "Ubuntu Arabic",
  "Waseem",
  "Zuhair",
  "Dubai",
  "Amiri",
  "Bukra",
  "Bahij Nazanin",
  "Kufam",
  "Lalezar",
  "Mirza",
  "Sakkal Majalla",
  "Scheherazade",
  "Tajawal",
  "Lateef",
  "Reem Kufi",
  "Almarai",
  "Cairo",
  "Harmattan",
  "Janna LT",
  "Mada",
  "Muna",
  "JF Flat",
  "JF Hitham",
  "JF Nizar",
  "JF Deco",
  "JF Ziba",
  "JF Unicode Naskh",
  "JF Typist",
  "JF Flat Arabic",
  "JF Nizar Serif",
  "JF Zaytoon",
  "JF Zuhair",
  "JF Deco Arabic",
  "JF Hujjat",
  "JF Noon",
  "JF Raya",
  "JF Riqa",
  "JF Tulisan",
  "JF Adeeb",
  "JF Zarkan",
  "JF Besmellah",
  "JF Noori Nastaleeq",
  "JF Noori Nastaleeq Kasheeda",
  "JF Noori Nastaleeq V1.0",
  "JF Noori Nastaleeq V2.0",
  "JF Noori Nastaleeq V3.0",
  "JF Noori Nastaleeq V4.0",
  "JF Noori Nastaleeq V5.0",
  "JF Noori Nastaleeq V6.0",
  "JF Noori Nastaleeq V7.0",
  "JF Noori Nastaleeq V8.0",
  "JF Noori Nastaleeq V9.0",
  "JF Noori Nastaleeq V10.0",
  "JF Noori Nastaleeq V11.0",
  "JF Noori Nastaleeq V12.0",
  "JF Noori Nastaleeq V13.0",
  "JF Noori Nastaleeq V14.0"
];

const PhotocardTextControls = ({
  handleTextChange,
  handlePositionChange,
  handleRotationChange,
  handleScaleChange,
  handleFontChange,
  handleColorChange,
}) => {
  const snap = useSnapshot(state)

  const handleTextChange = (type, value) => {
    if (type === 'front') {
      state.frontText = value;
    } else if (type === 'back') {
      state.backText = value;
    }
  };

  const handlePositionChange = (type, index, direction) => {
    const step = 0.01; // You can adjust the step size as needed

    if (type === 'front') {
      switch (direction) {
        case 'left':
          state.frontTextPosition[index] -= step;
          break;
        case 'right':
          state.frontTextPosition[index] += step;
          break;
        case 'up':
          state.frontTextPosition[index] += step;
          break;
        case 'down':
          state.frontTextPosition[index] -= step;
          break;
        default:
          break;
      }
    } else if (type === 'back') {
      switch (direction) {
        case 'left':
          state.backTextPosition[index] -= step;
          break;
        case 'right':
          state.backTextPosition[index] += step;
          break;
        case 'up':
          state.backTextPosition[index] += step;
          break;
        case 'down':
          state.backTextPosition[index] -= step;
          break;
        default:
          break;
      }
    }
  };

  const handleRotationChange = (type, index, value) => {
    if (type === 'front') {
      state.frontTextRotation[index] = value;
    } else if (type === 'back') {
      state.backTextRotation[index] = value;
    }
  };

  const handleScaleChange = (type, index, direction) => {
    const step = 0.01; // You can adjust the step size as needed

    if (type === 'front') {
      if (direction === 'increase') {
        state.frontTextScale[index] += step;
      } else if (direction === 'decrease') {
        state.frontTextScale[index] -= step;
      }
    } else if (type === 'back') {
      if (direction === 'increase') {
        state.backTextScale[index] += step;
      } else if (direction === 'decrease') {
        state.backTextScale[index] -= step;
      }
    }
  };

  const handleFontChange = (type, value) => {
    if (type === 'front') {
      state.frontTextFont = value;
    } else if (type === 'back') {
      state.backTextFont = value;
    }
  };

  const handleColorChange = (type, value) => {
    if (type === 'front') {
      state.frontTextColor = value;
    } else if (type === 'back') {
      state.backTextColor = value;
    }
  };

  return (
    <div className="absolute left-full ml-3 flex flex-wrap space-y-2 overflow-y-scroll w-40 h-80">
      {/* Front text controls */}
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Text:</span>
        <input
          type="text"
          value={snap.frontText}
          onChange={(event) => handleTextChange('front', event.target.value)}
        />
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">X:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('front', 0, 'left')}
        >
          Left ←
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('front', 0, 'right')}
        >
          Right →
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Y:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('front', 1, 'up')}
        >
          Up ↑
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('front', 1, 'down')}
        >
          Down ↓
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Rotation:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('front', 2, snap.frontTextRotation[2] - 0.01)}
        >
          Rotate Left
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('front', 2, snap.frontTextRotation[2] + 0.01)}
        >
          Rotate Right
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Scale:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleScaleChange('front', 0, 'decrease')}
        >
          Decrease
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleScaleChange('front', 0, 'increase')}
        >
          Increase
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Font:</span>
        <select value={snap.frontTextFont} onChange={(event) => handleFontChange('front', event.target.value)}>
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Color:</span>
        <SketchPicker
          color={snap.frontTextColor}
          disableAlpha
          onChange={(color) => handleColorChange('front', color.hex)}
        />
      </div>
      
      {/* Back text controls */}
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Text:</span>
        <input
          type="text"
          value={snap.backText}
          onChange={(event) => handleTextChange('back', event.target.value)}
        />
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">BX:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('back', 0, 'left')}
        >
          Left ←
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('back', 0, 'right')}
        >
          Right →
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">BY:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('back', 1, 'up')}
        >
          Up ↑
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('back', 1, 'down')}
        >
          Down ↓
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">BR:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('back', 2, snap.backTextRotation[2] - 0.01)}
        >
          Rotate Left
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('back', 2, snap.backTextRotation[2] + 0.01)}
        >
          Rotate Right
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">BS:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleScaleChange('back', 0, 'decrease')}
        >
          Decrease
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleScaleChange('back', 0, 'increase')}
        >
          Increase
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Font:</span>
        <select value={snap.backTextFont} onChange={(event) => handleFontChange('back', event.target.value)}>
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Color:</span>
        <SketchPicker
          color={snap.backTextColor}
          disableAlpha
          onChange={(color) => handleColorChange('back', color.hex)}
        />
      </div>
    </div>
  );
};

export default PhotocardTextControls;
