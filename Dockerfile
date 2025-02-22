FROM node:22

WORKDIR /src

COPY package*  .
COPY prisma* .

RUN npx prisma migrate  dev
RUN  npx prisma generate 
RUN tsc-b
RUN node dist/index.js


EXPOSE 3000
COPY . .
CMD [ "/dist , index.js" ]


