---
index_title: Non-relational Database
title: What Is a Non-relational Database?
description: "You know relational databases. But what is a non-relational database? Visit our glossary page to learn more and deepen your technical knowledge."
wrapperClassName: career
---

import Screenshot from "@theme/Screenshot"

# What Is a Non-relational Database?

A non-relational database is a type of database that stores data in non-tabular
formats. Also known as NoSQL (Not Only SQL) databases, they are typically
considered to be more flexible and scalable compared to traditional
[relational databases](/glossary/relational-database/) like MySQL and
PostgreSQL. Non-relational databases do not need predefined schemas and can
handle both unstructured and semi-structured data.

## Advantages of non-relational databases

Compared to relational databases, non-relational databases provide the following
benefits:

- **Flexibility**: NoSQL databases can handle various data formats ranging from
  JSON/XML documents to relationship data represented as graphs. Also, NoSQL
  databases don’t require a predefined schema to store data like relational
  databases, allowing for quick, iterative development. .
- **Scalability**: Many NoSQL databases scale out horizontally by adding
  multiple distributed servers. This pattern generally scales better than adding
  read-replicas or implementing a sharding mechanism commonly employed by
  relational databases.
- **Performance**: Different types of NoSQL databases are optimized for
  different data models. For certain use cases, these optimizations allow for
  faster query times and lower disk I/O, leading to higher performance compared
  to a generic relational data model.

For these reasons, NoSQL databases are popular for applications that require
flexible yet scalable data management. Examples include social media, web/mobile
gaming, and multimedia content.

## Limitations of non-relational databases

NoSQL databases have limitations that may not make it suitable for certain use
cases:

- **Limited transactionality**: Unlike relational databases that provide ACID
  compliance, NoSQL databases prioritize availability and scalability, falling
  back on eventual consistency guarantees instead. While some NoSQL databases
  offer limited transactional features, it does not provide the same level of
  consistency guarantees as relational databases.
- **Limited querying capability**: While some NoSQL databases may offer close to
  full SQL compatibility, depending on the type of NoSQL databases, querying
  capabilities may be limited to simple access patterns. A lack of enforced
  schema may also reduce support for complex transactions that require joins and
  aggregations.
- **Lack of standardization**: The differences in the APIs, SDKs, and interfaces
  for NoSQL databases are starker compared to minor syntactic variations across
  relational databases.

## Types of non-relational databases

- **Key-value**: Key-value stores data as a collection of key-value pairs. These
  are optimized for quick reads over complex calculations. Examples of key-value
  databases include Redis, Couchbase, Riak, and etcd.
- **Document**: Document databases store data as a collection of objects
  (documents), often in JSON or XML format. Document databases do not enforce
  the structure of each document, but can support hierarchical access and robust
  query operations. Examples of document databases include MongoDB, Amazon
  DynamoDB, and Google Firebase.
- **Graph**: Graph databases utilize graph structures to represent and store
  highly connected data. Relationships are encapsulated by nodes, edges, and
  properties. Graph structures are popular for storing social media,
  recommendation engines, and knowledge graph data. Examples of graph databases
  include Neo4j, Amazon Neptune, and ArangoDB.
- **Search**: Search databases index and aggregate semi-structured text for
  quick and efficient search operations. Popular examples of search databases
  include Elasticsearch and Apache Solr.
- **Time-series**: Traditionally,
  [time-series databases](/glossary/time-series-database/)(TSDB) have been
  considered as non-relational as the first products did not support tabular
  data or querying via SQL. However, modern time-series databases such as
  QuestDB support both although storage and access patterns behind the scenes
  differ from traditional relational databases.

## Non-relational databases vs. relational databases

The table below compares the traits of relational and non-relational databases:

|                  | Non-relational Databases                                    | Relational Databases              |
| ---------------- | ----------------------------------------------------------- | --------------------------------- |
| Data Model       | Key-value, document, graph, search, time-series             | Relational                        |
| Query Language   | Varies, including SQL                                       | SQL                               |
| Use Cases        | Unstructured or semi-structured data, high write-throughput | Structured data, complex querying |
| Data Consistency | Eventual consistency                                        | Strong consistency (ACID)         |
| Examples         | MongoDB, Cassandra, Redis, DynamoDB                         | MySQL, PostgreSQL, SQL Server     |
