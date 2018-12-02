requirejs.config({
    "baseUrl": "lib",
    "paths": {
      "app": "../app"
    }
});

requirejs(['app/components/main/main']);