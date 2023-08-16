---
title: IPv4 Operations
sidebar_label: IPv4
description: Operator examples with IPv4 type data.
---

This document outlines the IPv4 data type operators.

IPv4 addresses are **passed** as `string`, but are **stored** as `int`.

When applied as IPv4, they are presented between the range `0.0.0.1 - 255.255.255.255`.

When passed as a `string`, they may contain a subnet mask: `35.24.65.2/16`

Addresses when passed may contain trailing and leading dots: `...1.1.1.1...`.

See [IPv4 SQL functions](/docs/reference/function/ipv4/) for more context about IPv4 beyond operators.

## Operators

### < Less than

Takes two IPv4 arguments.

Returns a boolean.

#### Example

Use case: testing to see if one IP address is less than another.

```sql
ipv4 '33.1.8.43' < ipv4 '200.6.38.9' -> T
```

### <= Less than or equal

Takes two IPv4 arguments.

Returns a boolean.

#### Example

Use case: testing to see if one IP address is less than or equal to another.

```sql
ipv4 '33.1.8.43' <= ipv4 '33.1.8.43' -> T
```

### > Greater than

Takes two IPv4 arguments.

Returns a boolean.

#### Example

Use case: testing to see if one IP address is greater than another.

```sql
ipv4 '33.1.8.43' > ipv4 '200.6.38.9' -> F
```

### >= Greater than or equal

Takes two IPv4 arguments.

Returns a boolean.

#### Example

Use case: testing to see if one IP address is greater than or equal to another.

```sql
ipv4 '33.1.8.43' >= ipv4 '200.6.38.9' -> F
```

### = Equals

Takes two IPv4 arguments.

Returns a boolean.

#### Example

Use case: testing to see if one IP address is equal to another.

```sql
ipv4 '44.8.9.10' = ipv4 '6.2.90.1' -> F
```

### != Does not equal

Takes two IPv4 arguments.

Returns a boolean.

#### Example

Use case: testing to see if one IP address is not equal to another.

```sql
ipv4 '44.8.9.10' != ipv4 '6.2.90.1' -> T
```

### << Strict IP address contained by 

Takes one IPv4 argument and one string argument.

The string argument can accept IPv4 addresses with a subnet mask, the IPv4 argument cannot.

Returns a boolean.

#### Example

Use case: searching ip addresses by subnet

```sql
ipv4 '35.24.65.11' << '35.24.65.2/16' -> T
ipv4 '35.24.65.11' << '35.24.65.2/32' -> F
```

### <<=  IP address contained by or equal

Takes one IPv4 argument and one string argument

The string argument can accept IPv4 addresses with a subnet mask, the IPv4 argument cannot.

Returns a boolean.

#### Example

Use case: searching ip addresses by subnet

```sql
ipv4 '35.24.65.11' << '35.24.65.2/16' -> T
ipv4 '35.24.65.11' << '35.24.65.2/32' -> T
```

### & Bitwise AND

Takes two IPv4 arguments.

Returns an IPv4 address.

#### Example

Use case: separating an ip address into its network and host portions    

```sql
ipv4 '215.53.40.9' & ipv4 '255.255.0.0' -> 215.53.0.0
ipv4 '99.8.63.41' & ipv4 '0.0.63.41' -> 0.0.63.41
```
### ~ Bitewise NOT

Takes one IPv4 argument.

Returns an IPv4 address.

#### Example

Use case: computing broadcast address' bitmask from a netmask

```sql
~ ipv4 '255.255.0.0' -> 0.0.255.255
```

### | Bitwise OR

Takes two IPv4 arguments.

Returns an IPv4 address.

#### Example

Use case: computing an ip address' broadcast address

```sql    
ipv4 '92.11.8.40' | '0.0.255.255' -> 92.11.255.255
```

### + Add offset to an IP address

Takes one IPv4 argument and one integer argument.

Returns an IPv4 address.

#### Example
    
Use case: altering an ip address

```sql
ipv4 '92.11.8.40' + 5 -> 92.11.8.45
10 + ipv4 '2.6.43.8' -> 2.6.43.18
```

### - Subtract offset from IP address

Takes one IPv4 argument and one integer argument.

Returns an IPv4 address.

#### Example

```sql
ipv4 '92.11.8.40' - 5 -> 92.11.8.35
```

### - Difference between two IP addresses
    
Takes two IPv4 arguments.

    
Returns a long.

#### Example

Use case: calculating the range of unique addresses between two ip addresses

```sql
ipv4 '92.11.8.40' - ipv4 '92.11.8.0' -> 40
```
    
### Random address generator - rnd_ipv4()

Random address generator for a single address. 

Returns a single IPv4 address.

Useful for testing.

### Random address range generator - rnd_ipv4(string, int) 

Generates a random ip address within the bounds of a given subnet.

The integer argument dictates how many null values will be generated.

Returns an IPv4 address within specified range.

#### Example

```sql
rnd_ipv4('22.43.200.9/16', 0)
/* Return address between 22.43.0.0 - 22.43.255.25 */
22.43.200.12
```

## Limitations

IPv4 column types cannot be created via ILP as the protocol lacks support for IPv4. 

As a result, the server cannot distinguish between string and IPv4 data. 

However, ILP can still insert string data into a pre-existing column of type ipv4.