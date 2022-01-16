import { useState } from "react"
import ColorPicker, { themes } from "react-pick-color";

export default function ColorPickerDialog(params: {
  color: string
  onChangeColor: (color: string) => void
}) {

  return (
    <div>
      <ColorPicker color={params.color} onChange={(color) => params.onChangeColor(color.hex)} theme={themes.dark} hideInputs={true} />
    </div>
  )
}
