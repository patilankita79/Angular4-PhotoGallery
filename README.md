# Angular4-PhotoGallery Application
A simple gallery application developed using Angular4.<br>
We will have different set of categories and depending on the selection photo gallery will be filtered.<br>
If we click on the image, we can view enlarged image with its caption.<br>
Each image will have a metadata associated with it. <br><br>
<strong>Metadata</strong> of an image will include
<li>Caption</li>
<li>Category value</li>

This metadata can be used to dynamically generate the filters.

<hr>
<h4>Pre-requisites</h4>
<li>Node.js</li>
<li>TypeScript</li>
<li>Angular CLI</li>
<img src="https://github.com/patilankita79/Angular4-PhotoGallery/blob/master/Screenshots/NodeJS_TS_CLI_INFO.png"/>
<hr>
<h3>Generate angular application using Angular CL</h3>
<blockquote>$ng new PhotoGalleryApp</blockquote>
<br>
<h3>Bootstrap Installation Step</h3>
<strong>Step 1:</strong>
<blockquote>$npm install ngx-bootstrap bootstrap --save</blockquote>
<br>
<strong>Step 2:</strong><br>
In app.module.ts, <br>

```
import {AlertModule} from 'ngx-bootstrap/ng2-bootstrap';
```

and import AlertModule in imports[ ] of NgModule decorator
<br>
<strong>Include the following relative path under "styles" attribute in .angular-cli.json</strong>

```
"styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css"
      ]
```

<hr>
While using AlertModule component form bootstrap, I encountered this issue => <br>
<strong>No provider for alertconfig! - with angular-cli</strong>
<br>
<strong>Solution: </strong> Import AlertModule with with forRoot() in imports[ ] of NgModule() decorator in app.module.ts <br>

```
@NgModule({ 
        ------
        ------
        
        imports: [
        ------
        ------
        AlertModule.forRoot()
        ],
        -------
        -------
})
```
Reference link: https://github.com/valor-software/ngx-bootstrap/issues/1365
<hr>
<h3>Create a navbar component inside app folder</h3>
Google fonts are used in navbar component. Search for Lato and Open-sans<br>
Embed the following line of code in index.html under <head> tag

```
<link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans" rel="stylesheet">
```
<hr>
<h3>Create an image component that will be displayed inside the gallery</h3>

Use service
Service will be dealing with fetching the image from backend service. Serve static images
Service will be injected in ImageDetailComponent's constructor

<br>
Add ImageService to the list of providers in app.module.ts


https://stackoverflow.com/questions/34629517/file-app-hero-ts-is-not-a-module-error-in-the-console-where-to-store-interfac


Use pipes to filter images

Image detail component will allow us to see an instance of an image. For this, routes are implemented. This will allow to change view in the application. Register the routes in app.module.ts

```
import { appRoutes } from '../routes';

@NgModule({
        -------
        -------
        ------
        imports: [ 
        ------
        -----
        RouterModule.forRoot(appRoutes)
        -----
]
```


Include
Acts as a placeholder that Angular dynamically fills based on the current router state




