# Avoid using keepAwake in web applications (`@ecocode/avoid-keep-awake`)

⚠️ This rule _warns_ in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

## Why is this an issue?

To avoid draining the battery, an Android device that is left idle quickly falls asleep.
Hence, keeping the screen on should be avoided, unless it is absolutely necessary. If so, developers typically use the FLAG_KEEP_SCREEN_ON in their activity. Another way to implement this is in their application's layout XML file, by using the android:keepScreenOn attribute.

## Resources

### Documentation

