<div id="header" align="center">
  <h1> UNIT CONVERTER APP </h1>

[🔗 Unit Converter](https://theunitconverter.netlify.app/)

<p>A web app made with REACT and TYPESCRIPT to convert different kinds of units</p>
  </div>

## STRUCTURE

This app has a main view that includes 4 components:

- A TabGroup: this component includes the tabs element, where each conversion type has a tab and a tab panel. This is the main component of the app because is the one that handles the unit conversion

- An InputField: used for submitting the number to convert and to display the converted data

- A SelectInput: used to display all the available units to convert from and to

- Footer with a link to the app repo in GitHub

The value for each unit to make the conversions is stored in the [unit.tsx](src/units/unit.tsx) file, where an array of objects includes all the available types of conversion and the units for each one, with the unit name and the unit value.

The [converter.tsx](src/converter.tsx) file includes three helper functions that are used inside the TabGroup component to get the result for the conversion.

## Installation

npm i

npm start

## Stack

This app was made with **Typescript**, **React**, **SASS**, **MUI**, and the [React Tabs](https://www.npmjs.com/package/react-tabs) component.

