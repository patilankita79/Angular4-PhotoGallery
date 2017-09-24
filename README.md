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




