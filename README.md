# Hacker Rank
Hacker rank solutions for Interview Preparation Kit


# 1 - Sock Merchant: 
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

# 2 - Clouds 

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
