# feiras-livres-sp

## References

https://dribbble.com/shots/7150621--Real-Estate

https://dribbble.com/shots/6153270-Meeting-Point-App

https://dribbble.com/shots/6645394-Cashback

Preact, CSS modules

## Maps Reference

https://github.com/googlemaps/v3-utility-library

https://developers.google.com/maps/documentation/javascript/coordinates?hl=pt_BR

## Todo's

#### Mock the Google Maps Data, to not making requests everytime.

```
[
  {
    data: {
      sub: "AF",
      name: "VILA FORMOSA",
      category: "T",
      neighborhood: "VL FORMOSA",
      street: "AV TRUMAIN, S/N",
      size: "541,00",
      marketers: "96",
      lat: "-23.5654036",
      lon: "-46.536137499999995"
    },
  },
  {
    data: {
      sub: "AF",
      name: "VILA CARRAO",
      category: "T",
      neighborhood: "VL CALIFORNIA",
      street: "RUA COMEN GIL PINHEIRO, 325",
      size: "511,00",
      marketers: "89",
      lat: "-23.5414455",
      lon: "-46.54536010000004"
    }
  }
]
```

#### Make the google maps Marker clickable, to open a card

#### Work on desktop layout

## CLI Commands

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and preact-render-spy
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
