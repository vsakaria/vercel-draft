# Minimal Headless SPA Demos

The new Visual SPA Editor allows authors to edit your SPA, reducing your ongoing maintenance duties. (win!) But you get to keep everything fully headless.

This demo shows you how to use the basic features for both React and Angular.

![The App](magnolia/_dev/README-screenshot-app.png)

## Pages and Components

The demo contains:

-   Basic page template
-   Contact page template

-   Header component
-   Paragraph component
-   Image component
-   List component
-   Item component (available inside List component)
-   Expander component

-   Navigation component

## Configuring REST and DAM security

### DAM

In order for images to be displayed:
Open the Security app, open the `Roles` tab, edit the `rest-anonymous` role, go to `Web access` tab, `Add new` with this path `/dam/*` set to GET.

![Image Access for Anonymous](magnolia/_dev/README-security-anonymous-dam.png)

In `Access control lists` tab modify `Dam` workspace by allowing `Read-only` access to `Selected and sub nodes` to `/`.

### Next.js SSR

You will need to create a root page with the `Next.js SSR: Basic` template and name it `nextjs-ssr-minimal`.

Go to `/spa/nextjs-ssr-minimal` on the terminal and run `npm install`, and then `npm run build && npm start`.

It will start start the Next.js server.

All Magnolia specific configurations can be find in `[[...pathname]].js` file.

# Create Sample Content

**_Either_** import some content, or create it manually.

### Import:

**_In the Pages app_**, Use the 'Import' action (with nothing selected) and select the appropriate file from `/magnolia/_dev/content-to-import/`, depending on which 'flavor' you are using.

### Manually:

Open the `Pages` app in Magnolia and **_click Add Page_** add either

-   A `Next.js SSR: Basic` **_template_** and name it `nextjs-ssr-minimal`

> The page name is important as the SPA's are hardcoded to treat those names as the base of the app.

Then add components into the `Main` or `Extras` area of the page.
You can also add additional pages as children of that page.
