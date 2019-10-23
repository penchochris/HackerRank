# Hacker Rank - Interview Preparation Kit
Hacker rank solutions for Interview Preparation Kit

## Warm-up Challenges

### Sock Merchant: 
John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are **n = 7**  socks with colors **ar = [1,2,1,2,1,3,2]**. There is one pair of color **1** and one of color **2** . There are three odd socks left, one of each color. The number of pairs is **2**.

**Function Description**

Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

* n: the number of socks in the pile
* ar: the colors of each sock

**Input Format**

The first line contains an integer **n** , the number of socks represented in **ar** .
The second line contains **n**  space-separated integers describing the colors **ar[i]**  of the socks in the pile.

**Sample Input**
```
const n = 9
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
```

### Clouds 

Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus **1**  or **2** . She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

For each game, Emma will get an array of clouds numbered **0**  if they are safe or **1**  if they must be avoided. For example,  **c = [0, 1, 0, 0, 0, 1, 0]** indexed from **0...6**. The number on each cloud is its index in the list so she must avoid the clouds at indexes **1** and **5**. She could follow the following two paths:  **0 -> 2  -> 4 -> 6** or **0 -> 2 -> 3 -> 4 -> 6**. The first path takes **3**  jumps while the second takes **4**.

**Function Description**

Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

jumpingOnClouds has the following parameter(s):

* c: an array of binary integers
**Input Format**

The first line contains an integer **n** , the total number of clouds. The second line contains **n** space-separated binary integers describing clouds **c[i]**  where **0 ≤ i < n**.

**Input Example**
```
const n = 7
const c = [0, 0, 1, 0, 0, 1, 0]
```

### Counting Valleys

Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly **n** steps. For every step he took, he noted if it was an uphill, **U** , or a downhill, **D** step. Gary's hikes start and end at sea level and each step up or down represents a **1** unit change in altitude. We define the following terms:

* A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
* A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

For example, if Gary's path is **s = [DDUUUUUDD]**, he first enters a valley **2** units deep. Then he climbs out an up onto a mountain **2** units high. Finally, he returns to sea level and ends his hike.

**Function Description**

Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.

countingValleys has the following parameter(s):

* n: the number of steps Gary takes
* s: a string describing his path

**Input Format**

The first line contains an integer **n**, the number of steps in Gary's hike.
The second line contains a single string **s**, of **n** characters that describe his path.

**Sample Input**
```
const n = 8
const s = 'UDDDUDUU' //using array directly in my exercice .split('')
```

### Repeated String

Lilah has a string, **s**, of lowercase English letters that she repeated infinitely many times.

Given an integer, **n**, find and print the number of letter a's in the first **n** letters of Lilah's infinite string.

For example, if the string **s = 'abcac'** and **n = 10**, the substring we consider is **abcacabcac**, the first **10** characters of her infinite string. There are **4** occurrences of a in the substring.

**Function Description**

Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length **n** in the infinitely repeating string.

repeatedString has the following parameter(s):

* s: a string to repeat
* n: the number of characters to consider

**Input Format**

The first line contains a single string, **s**.
The second line contains an integer, **n**.

**Sample Input**
```
const n = 10
const s = 'aba'
```

## Arrays

### 2D Array - DS

Given a **6 x 6** 2D Array, **arr**:
```
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
```

We define an hourglass in **A** to be a subset of values with indices falling in this pattern in **arr**'s graphical representation:

```
a b c
  d
e f g
```

There are **16** hourglasses in **arr**, and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in **arr**, then print the maximum hourglass sum.

For example, given the 2D array:

```
-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
 ```
 
We calculate the following **16** hourglass values:

```
-63, -34, -9, 12, 
-10, 0, 28, 23, 
-27, -11, -2, 10, 
9, 17, 25, 18
```

Our highest hourglass value is **28** from the hourglass:

```
0 4 3
  1
8 6 6
```

**Note**: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

**Function Description**

Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array.

hourglassSum has the following parameter(s):

* arr: an array of integers

**Input Format**

Each of the **6** lines of inputs **arr[i]** contains **6** space-separated integers **arr[i][j]**.

**Sample Input**

```
const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];
```

### Arrays: Left Rotation

A left rotation operation on an array shifts each of the array's elements **1** unit to the left. For example, if **2** left rotations are performed on array **[1, 2, 3, 4, 5]**, then the array would become **[3, 4, 5, 1, 2]**.

Given an array **a** of **n** integers and a number, **d**, perform **d** left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

**Function Description**

Complete the function rotLeft in the editor below. It should return the resulting array of integers.

rotLeft has the following parameter(s):

* An array of integers **a**.
* An integer **d**, the number of rotations.

**Input Format**

The first line contains two space-separated integers **n** and **d**, the size of **a** and the number of left rotations you must perform.
The second line contains **n** space-separated integers **a[i]**.

**Sample Input**

```
const a = [ 1, 2, 3, 4, 5 ];
const d = 4;
```

### New Year Chaos

It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. Initial positions increment by **1** from **1** at the front of the line to  at the back.

Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if **n = 8** and **Person 5** bribes **Person 4**, the queue will look like this: **1, 2, 3, 5, 4, 7, 8**.

Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!

**Function Description**

Complete the function minimumBribes in the editor below. It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.

minimumBribes has the following parameter(s):

* q: an array of integers

**Input Format**

The first line contains an integer **t**, the number of test cases.

Each of the next **t** pairs of lines are as follows:
- The first line contains an integer **t**, the number of people in the queue
- The second line has **n** space-separated integers describing the final state of the queue.

**Input Sample**

```
const queue = [5, 1, 2, 3, 7, 8, 6, 4];
```

**Output Format**

Print an integer denoting the minimum number of bribes needed to get the queue into its final state. Print Too chaotic if the state is invalid, i.e. it requires a person to have bribed more than **2** people.
