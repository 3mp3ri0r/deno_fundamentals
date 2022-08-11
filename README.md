# Deno Fundamentals

Webinar deno fundamentals August 11th 2022 by Breakthrough.

## 1-fetch.ts

```sh
deno run 1-fetch.ts
deno run --allow-read 1-fetch.ts
```

By running the module and you will know that:

1. Deno provide web platform functionality and adopts web platform
standars.
2. Deno is secure by default. No file, network, or environment access, 
unless explicitly enabled.

## 2-server.ts and 3-server.ts

```sh
deno lint 2-server.ts
deno lint 3-server.ts
```

By running deno lint tools to this module, you will know that deno make 
developer easier by having standard lint tools and configuration to be 
used.

```sh
deno compile 2-server.ts
```

By running deno compile tools to this module, you will know that deno able 
to create single executable file for your apps that already included the 
environment like the runtime. You can then distribute the executable file 
to anywhere with the same target.

```sh
deno info 2-server.ts
```

By running deno dependency inspector tools to this module, you will know 
that deno make developer experience better by showing apps dependency 
tree.

## 4-fetch.ts

```sh
deno fmt 4-fetch.ts
```

By running deno formatter tools to this module, you will know that deno 
make developer experience easier by having standard formatter and 
configuration.

## 5-server.ts

```sh
deno install --allow-read --allow-write --allow-env --allow-net --allow-run --no-check -r -f https://deno.land/x
deployctl deploy --project=PROJECT_NAME --token=TOKEN 5-server.ts
```

By installing deployctl and run deployment using deployctl developer can 
easily piblish their app to the users. Don't forget to create the project 
and generate token in https://dash.deno.com/ .
