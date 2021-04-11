# `{{class-names}}` helper

<p>
  <a href="https://github.com/PrecisionNutrition/ember-class-names-helper/actions?query=workflow%3ACI" target="_blank" rel="noopener noreferrer">
    <img src="https://github.com/PrecisionNutrition/ember-class-names-helper/workflows/CI/badge.svg" alt="CI status">
  </a>

  <a href="https://www.npmjs.com/package/ember-class-names-helper" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/npm/v/ember-class-names-helper?color=informational" alt="NPM version" />
  </a>
</p>

Provides a cleaner way for conditionally joining class names in templates.

**Before:**

```hbs
<button class="button {{if @primary "button--primary"}} {{if @small "button--small"}} {{if @disabled "is-disabled"}}" type="button">
  Submit
</button>
```

**After:**

```hbs
<button
  class={{class-names
    "button"
    button--primary=@primary
    button--small=@small
    is-disabled=@disabled
  }}
  type="button"
>
  Submit
</button>
```

Or with `{{cn}}` alias in a single line:

```hbs
<button
  class={{cn "button" button--primary=@primary button--small=@small is-disabled=@disabled}}
  type="button"
>
  Submit
</button>
```

## Installation

```
ember install ember-class-names-helper
```

The helper relies on a tiny and well-tested library [classnames](https://github.com/JedWatson/classnames).

## Usage

```hbs
<button
  class={{class-names
    "button"
    (if @fancy "bg-white rounded-lg p-6")
    button--primary=@primary
    is-disabled=@disabled
  }}
  type="button"
/>
```

Or with `{{cn}}` alias:

```hbs
<button
  class={{cn "button" is-disabled=@disabled}}
  type="button"
/>
```

## Compatibility

- Ember.js v3.12 or above
- Ember CLI v2.13 or above
- Node.js v10 or above

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
