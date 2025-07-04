npm init
npm i nodemon --save-dev
npm i dontenv
npm i env-var

migrations:
npx typeorm-ts-node-commonjs migration:generate -d ./src/context/index.ts ./src/migrations/DeleteChefsLastName
npx typeorm-ts-node-commonjs migration:run -d ./src/context/index.ts
