import Singleton from './Singleton';

for (let i = 1; i <= 10; i++) {
  const fi = Singleton.getInstance(`Frame ${i}`, { width: i, height: i });
  console.info(fi);
}

// try to create one more instance
// error should be thrown, so we wrap the next code in `try/catch`
try {
  const f11 = Singleton.getInstance('Frame 11', { width: 4, height: 6 });
  console.info(f11);
} catch (e) {
  console.error(e.message);
  // Cannot get instance with name "Frame 11": Count of instances should be less or equal to 10
}
