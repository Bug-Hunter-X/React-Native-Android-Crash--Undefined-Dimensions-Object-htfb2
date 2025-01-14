# React Native Android Crash: Undefined Dimensions Object

This repository demonstrates a common bug in React Native Android applications where the `Dimensions` API returns undefined, leading to crashes during the initial render.  The issue stems from accessing `Dimensions` before the native modules are fully initialized.

## Problem

When trying to access screen dimensions using `Dimensions.get('window')` or `Dimensions.get('screen')` early in the app's lifecycle (e.g., within `componentDidMount` or during component initialization), the `Dimensions` object might be null or undefined on Android, causing a runtime crash. This is less common in iOS, but is still a potential issue. 

## Solution

This example provides a solution using the `useEffect` hook and the `Dimensions` API along with the `Layout` component. We can listen for changes in layout and access Dimensions after the layout is measured.