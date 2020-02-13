---
published: true
layout: post
category: ruby-on-rails
---
## Enumerated values are not people friendly

Frameworks typically don't include this kind of method out of the box with Strings. If you have an an emum of machine level names, naturally you want to use underscores and lowercases to keep it machine friendly:

```
   class Vehicle
     enum vehicle_type: %i(car truck semi_truck motorcyle)
   end
```

If you ever wanted to print out the `vehicle_type` in a string, your users would be a little confused as to why there would be underscores in the text:


```
   @vehicle.vehicle_type = :semi_truck
   puts "This type of vehicle is a #{@vehicle.vehicle_type}"
   
   # not really user friendly... just say "semi truck"
   => "This type of vehicle is a semi_truck"
```

## Enter Humanize

Developer happiness is exactly what Rails so famously preaches above all else. And the `String#humanize` method is a great example.

Without even having to create a mapping of _cannoncial_ names to their given machine names, you can use `.humanize` to convert underscores into spaces:

```
   @vehicle.vehicle_type = :semi_truck
   puts "This type of vehicle is a #{@vehicle.vehicle_type.humanize}"
   
   # yay, now our output is much more _human_ friendly. Remember, we write apps for real people
   => "This type of vehicle is a semi truck"
```

There's even support for options like `capitialize: true` which will captialize the string:

```
   @vehicle.vehicle_type = :semi_truck
   puts "This type of vehicle is a #{@vehicle.vehicle_type.humanize(captialize: true)}"
   
   # yay, now our output is much more _human_ friendly. Remember, we write apps for real people
   => "This type of vehicle is a Semi Truck"
```

Anyway, [check the docs out](https://apidock.com/rails/String/humanize) but that's my 5 minute cool find for today. Happy building.
