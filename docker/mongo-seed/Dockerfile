FROM mongo:3.2

COPY init.json /init.json
CMD mongoimport --host 172.16.0.1 --db test --collection users \
   --type json --file /init.json --jsonArray