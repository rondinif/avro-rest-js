# 2021 January [avro-rest-js@0.1.2]
## improved documentation  
- see docs folder
## Bumped dempency versions to resolve 11 vulnerabilities (5 low, 6 high) in 526 scanned packages
- current `avro-rest-js@0.1.2` version dependicies scanned ad 20210123
```
[avro-rest-js (master)]$ npm audit
                                                                                
                       === npm audit security report ===                        
                                                                                
found 0 vulnerabilities
 in 467 scanned packages
```
- previous `avro-rest-js@0.1.1` version dependicies scanned ad 20210123 
```
npm audit
                                                                                
                       === npm audit security report ===                        
                                                                                
# Run  npm install --save-dev nodemon@2.0.7  to resolve 1 vulnerability
SEMVER WARNING: Recommended action is a potentially breaking change
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ Low           │ Prototype Pollution                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ ini                                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ nodemon [dev]                                                │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ nodemon > chokidar > fsevents > node-pre-gyp > rc > ini      │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/1589                            │
└───────────────┴──────────────────────────────────────────────────────────────┘


# Run  npm install axios@0.21.1  to resolve 1 vulnerability
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ High          │ Server-Side Request Forgery                                  │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ axios                                                        │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ axios                                                        │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ axios                                                        │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/1594                            │
└───────────────┴──────────────────────────────────────────────────────────────┘


# Run  npm update dot-prop --depth 4  to resolve 1 vulnerability
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ High          │ Prototype Pollution                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ dot-prop                                                     │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ nodemon [dev]                                                │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ nodemon > update-notifier > configstore > dot-prop           │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/1213                            │
└───────────────┴──────────────────────────────────────────────────────────────┘


# Run  npm update http-proxy --depth 2  to resolve 1 vulnerability
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ High          │ Denial of Service                                            │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ http-proxy                                                   │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ light-server [dev]                                           │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ light-server > http-proxy                                    │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/1486                            │
└───────────────┴──────────────────────────────────────────────────────────────┘


# Run  npm update lodash --depth 4  to resolve 1 vulnerability
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ Low           │ Prototype Pollution                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ lodash                                                       │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ light-server [dev]                                           │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ light-server > gaze > globule > lodash                       │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/1523                            │
└───────────────┴──────────────────────────────────────────────────────────────┘


# Run  npm update elliptic --depth 4  to resolve 2 vulnerabilities
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ High          │ Signature Malleability                                       │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ elliptic                                                     │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ browserify [dev]                                             │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ browserify > crypto-browserify > browserify-sign > elliptic  │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/1547                            │
└───────────────┴──────────────────────────────────────────────────────────────┘


┌───────────────┬──────────────────────────────────────────────────────────────┐
│ High          │ Signature Malleability                                       │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ elliptic                                                     │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ browserify [dev]                                             │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ browserify > crypto-browserify > create-ecdh > elliptic      │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/1547                            │
└───────────────┴──────────────────────────────────────────────────────────────┘


# Run  npm update bl --depth 3  to resolve 1 vulnerability
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ High          │ Remote Memory Exposure                                       │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ bl                                                           │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ mongoose                                                     │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ mongoose > mongodb > bl                                      │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/1555                            │
└───────────────┴──────────────────────────────────────────────────────────────┘


# Run  npm update ini --depth 7  to resolve 3 vulnerabilities
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ Low           │ Prototype Pollution                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ ini                                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ nodemon [dev]                                                │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ nodemon > update-notifier > is-installed-globally >          │
│               │ global-dirs > ini                                            │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/1589                            │
└───────────────┴──────────────────────────────────────────────────────────────┘


┌───────────────┬──────────────────────────────────────────────────────────────┐
│ Low           │ Prototype Pollution                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ ini                                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ nodemon [dev]                                                │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ nodemon > update-notifier > latest-version > package-json >  │
│               │ registry-auth-token > rc > ini                               │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/1589                            │
└───────────────┴──────────────────────────────────────────────────────────────┘


┌───────────────┬──────────────────────────────────────────────────────────────┐
│ Low           │ Prototype Pollution                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ ini                                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ nodemon [dev]                                                │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ nodemon > update-notifier > latest-version > package-json >  │
│               │ registry-url > rc > ini                                      │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/1589                            │
└───────────────┴──────────────────────────────────────────────────────────────┘


found 11 vulnerabilities (5 low, 6 high) in 526 scanned packages
```     



# 2020 April [avro-rest-js@0.1.1]
## improved documentation  
- instruction includes the option to develop the project ( ...and test it )
 without the need to install and run `mongod` and `mongo client` on the *developer machine*
 but run them from a *docker container*.
## updated depencencies and dev-depencies
- fixed potential security vulnerabilities in older versions of the dependencies.
## changed `LICENSE`
- since April 2020 **rondinif/avro-rest-js** is licensed under the
**MIT License**
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.