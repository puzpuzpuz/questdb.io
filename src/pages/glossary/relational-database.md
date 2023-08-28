---
index_title: Relational Database
title: What Is a Relational Database?
description: "Relational databases are popular. When should you use one? What is it for? Visit our glossary page to learn more and deepen your technical knowledge."
wrapperClassName: career
---

import Screenshot from "@theme/Screenshot"

# What Is a Relational Database?

A relational database is a type of database that stores and manages data in a
tabular format, using a relational model. Data is organized into a collection of
tables consisting of rows and columns. Each data point in a relational database
is written to a row with a unique ID (key) with other attributes corresponding
to each column. Data is then retrieved via Structured Query Language (SQL),
which is why relational databases are often called SQL databases.

<Screenshot
  alt="Diagram showing an example of a relational database with data in the Transaction table mapped to the Product table and the Customer table."
  height={342}
  src="/img/glossary/relational-database/relational-database.webp"
  width={770}
  title="Example of a relational database: the data in the Transaction table is mapped to the Product table and the Customer table."
/>

Relational databases are commonly used for scenarios where data can be logically
mapped to the relational model. Because data is stored in a structured manner,
relational databases can perform complex queries across tables efficiently.
Finally, due to their transactional guarantees, relational databases are a great
choice where data consistency and transactionality are of utmost importance such
as in e-commerce or banking.

## Relational model

The relational database model was first developed by Edgar F. Codd from IBM in
the 1970s. In this model, data is represented by related logical tables linked
through attribute relationships. For example, to represent a user’s bank account
information, we may have a **Transactions** table and an **Accounts** table.

The transactions table may hold information about each deposit and withdrawal
such as the source, destination, and amount. Then in the accounts table, we may
have information about each account such as type (e.g., checking vs. savings)
and the owner. These two tables may be linked by account ID so that each bank
user can easily find their transaction information per their account.

A relational model is an intuitive way to represent data. Due to its simplicity
and widespread adoption, it has been the foundation for relational database
systems that are used today.

## Relational model operations

Relational databases surface data via relational model operations. Some
importation operations include:

- **Select**: Select is used to choose specific rows from a table based on a
  condition. It can return all the data when unspecified or filter out a subset
  of the rows.
- **Project**: Projection is used to choose specific columns from a table based
  on a condition.
- **Join**: Join operation is used to combine rows from two or more tables based
  on related columns.
- **Union**: Union combines the result of two or more select operations into a
  single result set.

## Characteristics of relational databases

In relational databases, data is typically stored and accessed in a row format.
In order to avoid full scans when selecting data, relational databases utilize
indexes to quickly find the relevant rows to return.

Also, relational databases are often marked by their ACID properties. These
properties are:

- **Atomicity**: Atomicity guarantees that all operations in a transaction
  either succeed or fail. If any part of an atomic transaction fails, then the
  entire transaction is rolled back. Think of a classic banking situation where
  you want to guarantee that when you pay someone, the amount being withdrawn is
  only debited when the recipient successfully can access that amount.
- **Consistency**: Consistency ensures that the database remains in a
  consistent, valid state after each transaction. This means that transactions
  should not violate any constraints, triggers, or other rules of the database.
  Going back to the banking example, if you have spending limits or overdraft
  protections set, any attempts to cross those limits should fail.
- **Isolation**: Isolation guarantees that transactions executed concurrently
  should produce an end state as if the transactions were executed sequentially.
  If a user had $100 in the bank and tried to withdraw $10 at the same time, the
  remaining balance should read
  $80. If isolation guarantees are broken, the database may return $90 as the
  balance.
- **Durability**: Durability means that once a transaction is committed, those
  changes become permanent. For our banking example, an ATM should return the
  same balance even after a power outage.

## Relational databases vs. non-relational databases

The table below compares the traits of relational and
[non-relational databases](/glossary/non-relational-database/):

|                  | Relational Databases              | Non-relational Databases                                    |
| ---------------- | --------------------------------- | ----------------------------------------------------------- |
| Data Model       | Relational                        | Key-value, document, graph, search, time-series             |
| Query Language   | SQL                               | Varies, including SQL                                       |
| Use Cases        | Structured data, complex querying | Unstructured or semi-structured data, high write-throughput |
| Data Consistency | Strong consistency (ACID)         | Eventual consistency                                        |
| Examples         | MySQL, PostgreSQL, SQL Server     | MongoDB, Cassandra, Redis, DynamoDB                         |

## Popular relational databases

- [MySQL](https://www.mysql.com)
- [PostgreSQL](https://www.postgresql.org)
- [SQLite](https://www.sqlite.org/index.html)
- [Microsoft SQL Server](https://www.microsoft.com/en-GB/sql-server/sql-server-downloads)
- [Oracle](https://www.oracle.com/)
- [MariaDB](https://mariadb.org/)
- [Amazon Aurora](https://aws.amazon.com/rds/aurora/)

## Additional resources

[Migrating from Relational Databases to Time-series Databases](https://itnext.io/migrating-from-relational-databases-to-time-series-databases-9f059a3e34cb)
