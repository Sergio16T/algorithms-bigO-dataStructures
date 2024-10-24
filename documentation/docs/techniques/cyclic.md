---
sidebar_position: 13
---

# Cyclic Algorithms

Example of cyclic round robin algorithm for getting next server

```JavaScript
function createRoundRobinLoadBalancer(servers) {
  let currentIndex = 0;

  return function getNextServer() {
    const server = servers[currentIndex];
    currentIndex = (currentIndex + 1) % servers.length; // modulus/remainder operator to automatically wrap around to 0 when exceeding array size
    return server;
  };
}

// Example Usage
const roundRobinLB = createRoundRobinLoadBalancer(['Server A', 'Server B', 'Server C']);
console.log(roundRobinLB()); // Server A
console.log(roundRobinLB()); // Server B
console.log(roundRobinLB()); // Server C
console.log(roundRobinLB()); // Server A (repeats)
```
