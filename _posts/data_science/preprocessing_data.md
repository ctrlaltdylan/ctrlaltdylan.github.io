---
post: Data Science Keywords
---

# Attribute Classification



## Discrete Attribute

Has a finite or countable infinite set of values

*Examples:* Zip codes, set of words in a collection of documents, etc.

## Continous Attribute

Has real numbers as attribute values

*Examples:* tempurature, height or weight

_Continous Attributes are typically represented as floating point variables_

## Categorical Attributes

Discrete Attributes that specifically have a finite set of values.

For example: an `enum` field, or S, M, L, XL for shirts

### Nominal Attributes

A subset of Categorical Attributes that doesn't have any particular order. Like zip codes, hair color, married or divorce, etc.

### Ordinal Attributes

A subset of Catergorical Attributes that have a specific order. Things like race ranking, grades, clothing sizes, etc.

### Interval Variables

Example: tempurature differences produce a nice even number

### Ratio Variables

Example: substracting decimals can give you floating numbers infinite in scope

## Types of Data Sets

### Record Data

Like a regular database table or spreadsheet

### Data Matrix

All numeric data

### Document Data

Each entry is corresponding with a document
Each attribute is a word
Each value is a numeric count corresponding to the count of unique words

### Transaction Data

A special type of record data where each record contains a set of items (like an array stored in an row instead of a singular value)

### Graph Data

Like the web

### Ordered Data

Each obect has to be ordered in some way. Like the human genome.

#### Spatial-Temporal Data

Data that can only be understood by association with a location and/or time

# Data Quality

* What problems do we have worry about?
* How do we detect those problems?
* What can we do about these problems?

Examples of data quality problems:
* Noise and outliers
* Missing values
* Duplicate data

*Noise*: invalid signal that overlaps valid data
Example: distortion of a person's voice over the phone

*Outliers*: Data objects that have characteristics that are considerably different from most of the rest of the data objects in the data set.

# Data Preprocessing

A.k.a. "data cleaning", but with more steps.

## Data Aggregation

Combining 2 or more attributes (or objects) into a single attribute (or object)

Purpose
* Data Reduction - reduce the number of objects
* Change of scale - Cities aggregated into states, etc.
* More "stable" data - aggregates tend to have less variability

## Sampling

Sampling is the main technique for data selection. Statisticians sample because obtaining the entire set of data is either too expensive or too large to be possible.

Data miners sample because processing our entire set of data might be too expensive.

A sample will work almost as well as using the entire data set *if the sample is representative*

### Types of Sampling

*Simple Random Sampling*
Equal probability of selecting any particular item

*Stratifed Sampling*
Split the dataset into several partitions; draw random samples from each partitions 
(partitions do not necessarily have to be equal in size)

*Sampling without Replacement*
As an item is selected, it is removed from the population

*Sampling with Replacement*
An item is added back into the population after selection. This allows the same item to be selected more than once

## Curse of Dimensionality

When dimensionality increases, data becomes increasingly sparse in that space it occupies.

## Dimensionality Reduction

* Avoid the curse of dimensionality
* Reduce the time & memory required
* Allow the data to be more easily visualized
* May help eliminate irrelevant features or reduce noise

### Redundant Features

Duplicates much or all of the information contained in one or more attributes

### Irrelevant Features

Contains no information that is useful

### Techniques for Subset Selections

* Brute Force Approach - Try all possible features
* Embedded Approach - Feature selection occurs naturally as part of a data mining algorithm
* Filter Approach - Features are selected before data mining is run

## Feature Creation

Original attributes are not always the best representation of information

Create new features that are much more focused

Three general methodologies:

* Feature Extraction
* Feature Construction
* Mapping Data to a new Space

