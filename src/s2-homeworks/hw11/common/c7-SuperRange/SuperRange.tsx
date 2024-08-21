import React from "react"
import {
  Slider,
  SliderProps,
} from "@mui/material"

export const SuperRange: React.FC<
  SliderProps
> = (props) => {
  return (
    <Slider
      value={
        props.value
      }
      sx={{
        color:
          "#00CC22",
        height: 8,
        "& .MuiSlider-track":
          {
            border:
              "none",
          },
        "& .MuiSlider-rail":
          {
            backgroundColor:
              "gray",
          },
        "& .MuiSlider-thumb":
          {
            height: 24,
            width: 24,
            backgroundColor:
              "#fff",
            border:
              "2px solid currentColor",
            "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible":
              {
                // boxShadow: 'inherit',
                boxShadow:
                  "0px 0px 3px 1px rgba(0, 0, 0, 0.1)",
              },
            "&::before":
              {
                display:
                  "none",
              },
            "&::after":
              {
                width: 10,
                height: 10,
                backgroundColor:
                  "#00CC22",
                cursor:
                  "pointer",
                borderRadius:
                  "50%",
              },
            "& .airbnb-bar":
              {
                height: 9,
                width: 9,
                backgroundColor:
                  "currentColor",
                marginLeft: 1,
                marginRight: 1,
              },
          },
        "& .MuiSlider-valueLabel":
          {
            lineHeight: 1.2,
            fontSize: 12,
            background:
              "unset",
            padding: 0,
            width: 32,
            height: 32,
            borderRadius:
              "50% 50% 50% 0",
            backgroundColor:
              "#00CC22",
            transformOrigin:
              "bottom left",
            transform:
              "translate(50%, -100%) rotate(-45deg) scale(0)",
            "&::before":
              {
                display:
                  "none",
              },
            "&.MuiSlider-valueLabelOpen":
              {
                transform:
                  "translate(50%, -100%) rotate(-45deg) scale(1)",
              },
            "& > *":
              {
                transform:
                  "rotate(45deg)",
              },
          },
      }}
      {...props}
    />
  )
}
