#Usage 


## Outputting
### Page Index
To output `{{ pageIndex | safe }}`

### User-flow 
User-flow allows you to see the user journey defined in 'user-flow.json' in your working directory. It shows the context of the flow that a user will experience.
To output `{{ userFlow | safe }}`

## Styles
You can include the 'page-flow.scss' module in your styles to inherit some of the basic layouts out of the box:
`@import "node_modules/@benwatsonuk/page-flow/assets/scss/page-flow"`

### Importing assets
To include the Page Flow assets (icons and images), you'll need to add the following to your Express instance: 
`app.use('/public/assets', express.static(path.join(__dirname, '/node_modules/@benwatsonuk/page-flow/assets')))
`
