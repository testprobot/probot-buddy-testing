setTimeout(() => {
  if (Math.random() <= 0.5) {
    process.exit(0);
  } else {
    process.exit(1);
  }
}, 5000);
