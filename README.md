# Input React Component

### Installation

To install the component, use the following command:

`npm i yc-input-component`

This component depends on [Tailwind CSS](https://tailwindcss.com) and [tailwind-merge](https://github.com/dcastil/tailwind-merge). Make sure both are installed in your project.

After installation, manually move the `input.tsx` file to your project's components folder. You can do this manually or use the following command:

`cp node_modules/yc-input-component/src/input.tsx /*your/folder/components*/`

### Usage Example

Here is a simple example of how to use the component:

```jsx
<Input.Root>
  <Input.FormField
    value={emailValue}
    hasError={!!errors.email?.message}
    initialBorderColor="white"
    focusedBorderColor="sky"
    {...register("email")}
  />

  <Input.Label
    label="Email"
    hasInputValue={emailValue !== ""}
    hasError={!!errors.email?.message}
    bgColor="zinc"
    initialTextColor="gray"
    focusedTextColor="sky"
  />

  <Input.ButtonIcon>
    <Mail color="#fff" size={18} />
  </Input.ButtonIcon>

  <Input.ErrorMessage errorMessage={emailErrorMessage} />
</Input.Root>
```

### `Input.FormField` Props

- **`value`**: The value of the input (string).
- **`initialBorderColor`**: The initial border color of the input.
- **`focusedBorderColor`**: The border color when the input is focused.
- **`hasError`** (optional): Indicates whether there is a validation error in the input (boolean).

### `Input.Label` Props

- **`label`**: The text of the label (string).
- **`hasInputValue`**: Indicates whether the input has a value (boolean).
- **`bgColor`**: The background color of the label (should match the background color of the parent element).
- **`initialTextColor`**: The initial text color of the label.
- **`focusedTextColor`**: The text color of the label when the input is focused.
- **`hasError`** (optional): Indicates whether there is a validation error in the input (boolean).

### `Input.ButtonIcon`

- The `ButtonIcon` should receive a `children` of type `ReactNode`.

### `Input.ErrorMessage` Props

- **`errorMessage`**: The error message (string).

### Notes

- All components accept the `className` property, allowing you to apply Tailwind CSS classes to customize the style as needed.
- If you want to add a new color type to the component, such as a new focus color or initial color for the `Input` or `Label`, this must be done manually. You need to add the new color to the type definition and include the desired styles in the `variants`.

```
// Example

// 1. Add the color "blue" to the existing type:
focusedTextColor: "sky" | "blue";

// 2. Define the styles for the new "blue" color in the variants:
const focusedTextColorVariants = {
  sky: {
    default: "text-sky-600",
    peer_focus: "peer-focus:text-sky-600",
  },
  blue: {
    default: "text-blue-600",
    peer_focus: "peer-focus:text-blue-600",
  },
};
```
