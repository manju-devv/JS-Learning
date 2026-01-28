// If microtasks keep executing continuously, macrotasks may never run → that’s starvation.
// Starvation = waiting forever because others are always served first.

// Real-life example 🧍🍽️

// Imagine a food counter:

// VIP customers are always served first

// Normal customers keep waiting

// New VIPs keep coming

// 👉 Normal customers may never get served
// That’s starvation.

function repeatMicrotask() {
  Promise.resolve().then(() => {
    console.log("Microtask running");
    repeatMicrotask();
  });
}

repeatMicrotask();

setTimeout(() => {
  console.log("Macrotask (setTimeout) running");
}, 0);
