# phaser-electron-typescript-parcel-greenworks

After running "npm install"...

To get greenworks working, run either
  npm install greenworks
OR
  yarn add greenworks
  
In node_modules/greenworks, create a directory "lib" and fill it with the binary from the OS-appropriate greenworks release and SteamworksSDK 1.42. You should have:
  node_modules/greenworks/lib/greenworks-win64.node
  node_modules/greenworks/lib/sdkencryptedappticket64.dll
  node_modules/greenworks/lib/steam_api64.dll
... or the OS-appropriate files specified by greenworks docs.

In node_modules/greenworks/deps, unpack the directory "sdk" from SteamworksSDK 1.42 and rename it to "steamworks_sdk" so that you have:
  node_modules/greenworks/deps/steamworks_sdk

Finally, remove the greenworks entry from "dependencies" in package.json.

All building and testing functions should now work without issue.
