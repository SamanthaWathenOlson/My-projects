CREATE TABLE CUSTOMERS(
   ID   INT              NOT NULL,  // To set a primary key on this column ID
   NAME VARCHAR (20)     NOT NULL,
   AGE  INT              NOT NULL,
   ADDRESS  CHAR (25) ,
   SALARY   DECIMAL (18, 2),       
   PRIMARY KEY (ID)
);

ALTER TABLE CUSTOMER ADD PRIMARY KEY (ID);

CREATE TABLE CUSTOMERS(
   ID   INT              NOT NULL,
   NAME VARCHAR (20)     NOT NULL,
   AGE  INT              NOT NULL,
   ADDRESS  CHAR (25) ,
   SALARY   DECIMAL (18, 2),       
   PRIMARY KEY (ID)
);

CREATE TABLE ORDERS (
   ID          INT        NOT NULL,
   DATE        DATETIME, 
   CUSTOMER_ID INT references CUSTOMERS(ID),
   AMOUNT     double,
   PRIMARY KEY (ID)
);

ALTER TABLE ORDERS 
   ADD FOREIGN KEY (Customer_ID) REFERENCES CUSTOMERS (ID);

SELECT column1, column2, columnN FROM table_name;

SELECT * FROM table_name;

SELECT column1, column2, columnN 
FROM table_name
WHERE [condition]

SELECT CUSTOMERS.AGE from CUSTOMERS where AGE > 20; // Can use DB name as prefix before column name.

INSERT INTO TABLE_NAME (column1, column2, column3,...columnN)  
VALUES (value1, value2, value3,...valueN);
