node './Frontend/node_modules/protobufjs/bin/pbjs' -t static-module -w commonjs -o './Frontend/src/bundle.js' './Messages/Messages.proto' 
node './Frontend/node_modules/protobufjs/bin/pbts' -o 'Frontend/src/bundle.d.ts' './Frontend/src/bundle.js'
protoc --csharp_out='./Backend' './Messages/Messages.proto' --csharp_opt=file_extension=.g.cs
