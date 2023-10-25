# Input Validation and Output Encoding

## Overview

These terms get mixed up a lot and there are confused and misunderstood relationships between them along with unrealistic expectations on dependencies/requirements.

Lets first start be defining a lot of terms that are used in this area

## Terms/Glossary

- canonicalization

- context

- escaping

- filtering

- input validation

- output encoding

- sanitization

### Escaping and Encoding

Sometimes these get used interchangeably.  They both have the same outcome, the difference is in the technique used to accomplish the goal.

## Injection Attack

The goal is to neutralize any meta-characters for the target context so the data is always treated as data and not commands.  This happens when data is sent to another context that will be parsed/interpreting in some fashion. 

- HTML (data) -> Browser (application) -> Rendered (parsing/interpreting)

- SQL Statement (data) -> SQL Server/PostgreSQL (application/DBMS) -> executing (parsing/interpreting)

- Source code (data) -> compiler (application) -> compilation (parsing/interpreting)

TODO: Visualization, parsing HTML

When should input validation happen?

- before data is processed

When should output encoding happen? 

- before it is sent to output

- after processing

The purpose of data input validation is to make sure data is in a known "safe" (TODO: is this the best word?) state.  When data is processed it should be against that known safe/canonical state. This way the applications logic doesn't have to worry about processing data that has been transformed into a different context (output encoding) and worry about edge cases.  The purpose of output encoding is to ensure data is treated as data in the context that it is going into.

A simple rule to follow "input validation happens as soon as possible and output encoding happens as late as possible"

## Axiums

Output context should make no demands on input validation*.

This means that the output context should make no demands on what is or is not allowed in input.  For example, stating that input cannot have less then ("<") and greater then signs (">") because it is going to be displayed on a webpage are wrong.  The business doesn't get to justify that.

And while input validation doesn't put any requirements on output encoding, if the input validation puts it into a state that would not be harmful to the output context (e.g. alphanumeric, cast to an integer, datetime, guid, etc.) then output encoding could be skipped (in those specific circumstances)

This does not mean we should be able to put any input (validated against business need) into any output*.

> NOTE: *There are risks of putting free form text onto the command line.  This is something that is dangerous and is hard to safely due.

## Input validation

Contextual input validation refers to the process of verifying the data entered by a user is accurate, complete, and valid for a particular context or use case.

The goal of input validation is to ensure that the data is accurate, complete, and valid, regardless of how it will be used or displayed in the output context.

The output context should not influence the input validation because it is possible for the same input to be valid or invalid, depending on the output context. For example, a string of characters might be valid input for a SQL query, but if that same string is displayed on an HTML page, it could be interpreted as malicious code.

### Input Validation Model

| Level | Description | Type |

|---|---|---|

|1|Null Check|Syntactic|

|2|Character Set|Syntactic|

|3|Min/Max/Length|Syntactic|

|4|Format|Syntactic|

|5|Domain Validation|Contextual|

|6|Business Validation|Contextual|

#### Level 1 - Null Check

#### Level 2 - Character Set

#### Level 3 - Min/Max/Length

#### Level 4 - Format

This is the format for general types (e.g. email, url, phone, etc.) appose to business specific formats (that is covered in level 6)

#### Level 5 - Domain Validation

Checking that data is valid within a specific domain or set of values (e.g. list of valid options or set of predefined values, i.e. if it is a country location that the country is from a list of known countries)

#### Level 6 - Business Validation

Checking that data satisfies specific business rules or requirements (e.g. unique identifier or specific project name format)

## Anti-Pattern

### Single input validation criteria for all inputs

### UTF-8 Encoding

### Deny List