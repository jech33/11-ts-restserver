# 11-ts-restserver
This is a project that resembles 07-rest-server in a shorter scale. It has the same functionality but is now written in TypeScript!

## How to run app
All typescript files are compiled in the dist folder (see how to configure TS), so to run the project instead of typing node app, now the command changes a little bit to:
```

$ node dist/app.js

// Or if using nodemon in development environment

$ nodemon dist/app.js

```

## How to configure TS
In order to initialize the project, there's some configurations that are needed:
```
$ npm i -g typescript           // To install ts globally
$ npm i typescript --save-dev   // To install ts in project dependencies
$ tsc --init                    // To initialize typescript tsconfig.json
$ npm i tslint --save-dev       // To install ts in project dependencies
```

The default configuration of tsconfig.json has to follow the next pattern:
```
{
    "compilerOptions": {
        // Leave everything commented and search for the following props
        "target": "es2016",                                 /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
        "module": "commonjs",                               /* Specify what module code is generated. */
        "moduleResolution": "node",                         /* Specify how TypeScript looks up a file from a given module specifier. */
        "sourceMap": true,                                  /* Create source map files for emitted JavaScript files. */
        "outDir": "./dist",                                 /* Specify an output folder for all emitted files. */
        "esModuleInterop": true,                            /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */
        "forceConsistentCasingInFileNames": true,           /* Ensure that casing is correct in imports. */
        "strict": true,                                     /* Enable all strict type-checking options. */
        "skipLibCheck": true                                /* Skip type checking all .d.ts files. */
    }
}
```

And to initialize tslint:
```
$ ./node_modules/.bin/tslint --init
```

Happy Hacking!
