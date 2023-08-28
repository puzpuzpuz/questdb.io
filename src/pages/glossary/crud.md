---
index_title: CRUD
title: What Is CRUD?
description: "What does CRUD stand for? Learn more about the four basic persistent storage operations in our glossary and deepen your technical knowledge."
wrapperClassName: career
---

# What Is CRUD?

Create, Read, Update, and Delete (CRUD) make up the four basic operations of
persistent storage. CRUD operations often refer to SQL operations used in
[relational databases](/glossary/relational-database/), but can also map to data
manipulation operations used in RESTful API services and other databases.

## Create

Create operation refers to adding new data or records in a system. In SQL, the
`CREATE` operation maps to the `INSERT` statement. For RESTful APIs, `POST` and
`PUT` HTTP methods are used to create new records.

## Read

Read operation involves retrieving stored data from a system. In SQL, the
`SELECT` keyword is used, whereas the `GET` HTTP method is used in RESTful APIs.

## Update

Update operation modifies or replaces existing data. In SQL, the `UPDATE`
keyword is used. For RESTful APIs, the `PUT` keyword is used to replace entire
records, whereas `PATCH` is used for partial updates.

## Delete

Delete operation is used to remove existing records from a system. For both SQL
and RESTful APIs, the `DELETE` keyword is used to invoke delete operations.

## Use Cases

Applications that support CRUD operations tend to be transactional use cases,
where individual inserts, reads, updates, and deletions are common. On the other
hand, analytical applications have different data storage and access patterns
where CRUD operations are less useful. For example, in analytical applications,
it is very common to insert data in bulk, then read data on aggregated values
rather than for individual data points. Data may be eventually deleted in bulk
often with no support for updates.
