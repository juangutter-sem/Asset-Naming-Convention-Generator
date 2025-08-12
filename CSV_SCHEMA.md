# CSV Schema

This document outlines the required columns for the CSV naming schema consumed by the DM Name Generator.

CSV Master File
--> https://docs.google.com/spreadsheets/d/1dnvlt8HyXBW0xU2PvM5_cLy-dz5Jke_M5egn_fCVQko/edit?gid=2047636821#gid=2047636821 

## Required Columns

| Column | Description | Example |
| --- | --- | --- |
| `generator` | Name of the generator category such as `Campaign`, `AdGroup`, or `Asset`. | `Campaign` |
| `field_order` | Position of the field in the generated name; numeric sequence starting at 1. | `1` |
| `field` | Key used to look up values for this segment of the name. | `objective` |
| `optional` | Whether the field may be omitted (`TRUE` or `FALSE`). | `FALSE` |
| `label` | Human‑readable label shown in the UI. | `Objective` |
| `code` | Abbreviated code inserted into the generated name. | `obj` |
| `delimiter` | Character(s) appended after the field's value. | `_` |
| `case` | Case transformation applied to the field's value (e.g., `lower`, `upper`, `title`). | `lower` |

## Example

```
generator,field_order,field,optional,label,code,delimiter,case
Campaign,1,objective,FALSE,Objective,obj,_,lower
Campaign,2,region,TRUE,Region,reg,-,lower
```

Use UTF-8 encoding and ensure the column headers exactly match the names above.
