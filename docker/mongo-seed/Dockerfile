FROM mongo:4.2

COPY init.json /init.json
CMD mongoimport --host 172.16.0.1 --db Tododb --collection tasks \
   --type json --file /init.json --jsonArray