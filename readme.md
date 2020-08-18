# Froged with Firebase

This is an example of how to integrate Froged into a web application that uses **Firebase Auth**

**FIREBASE**
1. Create your Firebase account
2. Replace your `firebaseConfig` in `firebase.js` file
3. Activate email auth
4. Add two users
    - **User**: one@user.com -> **Password**: 'password'
    - **User**: two@user.com -> **Password**: 'password'

**FROGED**

1. Create your Froged account and get your `workspaceId` (alphanumeric, 6 letters)
2. Replace your `xxxxxx` with your `workspaceId` in `index.html` 

Finally, serve this directory with a webserver. For example, we use http-server

``` bash

# Install http-server in your system
npm install -g http-server


# Serves this directory at 5001 port
http-server . -p 5001

```

Finally, you can go to your browser and open:

```
localhost:5001
```
