# Breakfast Club

Don't you forget about breakfast! All your favorite characters are back: the brain, the athlete, the basketcase, the princess, and the criminal. But this time they're more delicious than ever. Come check out your main resource for the most important meal of the day, Breakfast! 🙋

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Angular2](https://github.com/angular/angular)
* [Angular-CLI](https://github.com/angular/angular-cli)

## Installation

This site is live on Firebase [here](https://breakfast-club-81122.firebaseapp.com)!

**Step 1**: Clone this repository to your local computer

```console
git clone https://github.com/KWLEvans/breakfast-club
```

**Step 2**: Install all development and production dependencies from the project root directory

```console
npm install
```
```console
bower install
```

**Step 3**: Create a new file named `api-keys.ts` in the `src/app` directory to include your firebase information in the following format:

```js
  export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```

**Step 4**: Use Angular-CLI to run a local server instance

```console
ng serve
```

**Step 5**: Visit the app at [http://localhost:4200](http://localhost:4200).

## Planning

1. Configuration/dependencies
  * Install **bootstrap** and save as a dependency in bower.json for easier styling
  ```console
  bower install bootstrap --save
  ```
  * Add **bootstrap** to angular-cli.json under "styles"

  * Install **angularfire2** and **firebase** and add **firebase** to "types" on `tsconfig.json`

  * Build `api-keys.ts` and insert firebase access information, link to app and add to `.gitignore`

2. Specs
  * **Spec 1**: Users can view a list of all club members
  * **Spec 2**: Users can click a member tile to view their detail page
  * **Spec 3**: Users can visit an about page to learn about the club
  * **Spec 4**: Users can filter member list
  * **Spec 5**: Administrators can add new users
  * **Spec 6**: Administrators can edit current users
  * **Spec 7**: Administrators can delete users

3. Integration
  * `member.model`: model for `member` objects
  * `member.service`: service for CRUD functionalities on members on Firebase
  * `app.component`: base page with router-outlet
  * `''` route:
    * `home.component`: home page
    * `member-filter.pipe`: custom pipe for filtering members on home page
      * `member-tile.component`: tile to be displayed for each member on home page, if reached through `'admin'` route, users can access edit
        * `edit-member.component`: toggleable form for editing member information, or deleting users
  * `'about'` route: to static page giving information about the club
  * `'members/:id'` route: dynamic route to view individual members details
    * `member-detail.component`: component for displaying all details of a given member
  * `'admin'` route: for implementing CUD parts of CRUD
    * `admin.component`: component for creating users, contains `home.component`

4. UX/UI
  * Include bootstrap
  * Develop custom style
  * Make it all breakfast

5. Polish
  * Make README awesome

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## License

MIT License. Copyright 2017 Keith Evans
