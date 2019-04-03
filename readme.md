#Usage 


## Outputting
### Page Index
To output `{{ pageIndex | safe }}`

## Styles
You can include the 'page-flow.scss' module in your styles to inherit some of the basic layouts out of the box:
`@import "node_modules/@benwatsonuk/page-flow/assets/scss/page-flow"`

### Importing assets
To include the Page Flow assets (icons and images), you'll need to add the following to your Express instance: 
`app.use('/public/assets', express.static(path.join(__dirname, '/node_modules/@benwatsonuk/page-flow/assets')))
`
