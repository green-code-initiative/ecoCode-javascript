# Avoid using high accuracy geolocation in web applications (`@ecocode/avoid-high-accuracy-geolocation`)

⚠️ This rule _warns_ in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

## Why is this an issue?

High-precision geolocation typically requires more power from the device's GPS hardware.
By requesting less accurate geolocation, you can reduce the power consumption, leading to extended battery life, which
is crucial for mobile devices.

Obtaining highly accurate geolocation often involves more complex calculations and processing, which can increase CPU
usage.
If the application or service does not critically require pinpoint accuracy, opting for a less accurate geolocation can
help minimize the strain on the device's CPU.

```js
var options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }; // Non-compliant
navigator.geolocation.getCurrentPosition(
  (pos) => console.log(pos),
  (err) => console.warn(err),
  options
);
```

In these examples, the enableHighAccuracy option is set to false (the default), indicating that the application prefers
lower-accuracy geolocation to conserve resources:

```js
navigator.geolocation.getCurrentPosition((pos) => console.log(pos)); // Compliant by default
```

```js
var options = { enableHighAccuracy: false, timeout: 5000, maximumAge: 0 }; // Compliant
navigator.geolocation.getCurrentPosition(
  (pos) => console.log(pos),
  (err) => console.warn(err),
  options
);
```

## Resources

### Documentation

- [Mozilla Web Technology for Developers](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition) -
  getCurrentPosition() method
