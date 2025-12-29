# Short Response

## Question 1

For each scenario, identify whether the relationship is **inheritance** or **composition**, and provide a brief explanation.

For example, a `Song` and a `MediaItem` have an inheritance relationship because "a song is a type of media item". Meanwhile a team and player have a composition relationship because "a team has many players".

1. A `Car` class and an `Engine` class, where a car contains an engine
2. A `Dog` class and an `Animal` class, where a dog is a type of animal
3. A `Classroom` class and a `Student` class, where a classroom contains multiple students
4. A `Rectangle` class and a `Shape` class, where a rectangle is a type of shape
5. A `Computer` class and a `CPU` class, where a computer contains a CPU
6. A `Manager` class and an `Employee` class, where a manager is a type of employee

### Response 1

1. Composition — This is composition because a car has an engine. The engine is a part of the car, not a type of car, and it exists to support the car’s functionality.
2. Inheritance — This is inheritance because a dog is an animal. A Dog class would extend Animal and inherit its shared properties and behaviors.
3. Composition — This is composition because a classroom has students. Students exist independently of a specific classroom, but the classroom groups them together.
4. Inheritance — This is inheritance because a rectangle is a shape. It shares general shape properties but also has its own specific behavior.
5. Composition — This is composition because a computer has a `CPU`. The `CPU` is a component that helps the computer function but isn’t a type of computer.
6. Inheritance — This is inheritance because a manager is an employee. A manager would share common employee attributes while adding extra responsibilities.

---

## Question 2

In Problem 1, you are asked to implement a `Song`, `Podcast`, and `Audiobook` classes that all extend the `MediaItem` base class. Each class has their own `play()` method. This demonstrates **polymorphism**.

In your own words, explain what polymorphism means and why it is useful. Use the `MediaItem` example from this assignment to support your explanation.

### Response 2

Polymorphism means that different classes can share the same method name but implement it in their own way. Even though the method is called the same thing, the behavior depends on the object that’s calling it.

In the `MediaItem` example, `Song`, `Podcast`, and `Audiobook` all extend the `MediaItem` class, but each one has its own version of the `play()` method. When you call `play()` on a media item, `JavaScript` knows which version to run based on the actual object type. This is useful because it lets you treat different media items the same way while still allowing customized behavior. It makes the code more flexible, easier to extend, and easier to manage.
---

## Question 3

In JavaScript classes, properties and methods can be either **instance-level** or **static**.

a) What is the difference between an instance property and a static property?

b) Give an example of when you would want to use a static property or method instead of an instance property or method.

### Response 3

a) An instance property belongs to a specific object created from a class, meaning each instance can have different values. A static property belongs to the class itself, not to individual instances, and is shared across all instances.

b) You would use a static property or method when the data or behavior should be shared globally and doesn’t depend on a specific instance. For example, a static method could be used to keep track of how many `MediaItem` objects have been created, since that count applies to the class as a whole, not to one specific media item.