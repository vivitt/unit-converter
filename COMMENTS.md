<div id="header" align="center">
  <h1> UNIT CONVERTER APP </h1>

[🔗 Unit Converter](https://vivitt.github.io/rick_morty_app/)

[![CodeFactor](https://www.codefactor.io/repository/github/vivitt/rick_morty_app/badge/master)](https://www.codefactor.io/repository/github/vivitt/rick_morty_app/overview/master)

  <p>A webapp made with REACT and TYPESCRIPT to convert different kinds of unit</p>
  </div>

<div align="center">
<img src="public/Screenshot-01.png" alt="Homepage register light mode" width="400"  />

</div>

## STRUCTURE

This app has a main view that includes 4 components:

- A TabGroup : this component renders a tab and a tab panel for each type of conversion and group them all
- An InputField: used for submiting the number to convert and to display the converted data
- A SelectInput: that shows all the disponibles units for a conversion type

The values to make the conversions are stored in the [unit.tsx](src/units/unit.tsx) file, where an array of objects includes all the types of conversion an the units for each one.

## Installation

npm i

npm start

## Stack

This app was made with **Typescript**, **React** and **MUI**
Also included [React Tabs](https://www.npmjs.com/package/react-tabs)

**Axios**

**SASS**
