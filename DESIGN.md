---
name: Experimental Architectural Narrative
colors:
  surface: '#fdf7ff'
  surface-dim: '#ded8e0'
  surface-bright: '#fdf7ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f2fa'
  surface-container: '#f2ecf4'
  surface-container-high: '#ece6ee'
  surface-container-highest: '#e6e0e9'
  on-surface: '#1d1b20'
  on-surface-variant: '#494551'
  inverse-surface: '#322f35'
  inverse-on-surface: '#f5eff7'
  outline: '#7a7582'
  outline-variant: '#cbc4d2'
  surface-tint: '#6750a4'
  primary: '#4f378a'
  on-primary: '#ffffff'
  primary-container: '#6750a4'
  on-primary-container: '#e0d2ff'
  inverse-primary: '#cfbcff'
  secondary: '#63597c'
  on-secondary: '#ffffff'
  secondary-container: '#e1d4fd'
  on-secondary-container: '#645a7d'
  tertiary: '#765b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#c9a74d'
  on-tertiary-container: '#503d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#cfbcff'
  on-primary-fixed: '#22005d'
  on-primary-fixed-variant: '#4f378a'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#cdc0e9'
  on-secondary-fixed: '#1f1635'
  on-secondary-fixed-variant: '#4b4263'
  tertiary-fixed: '#ffdf93'
  tertiary-fixed-dim: '#e7c365'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#594400'
  background: '#fdf7ff'
  on-background: '#1d1b20'
  surface-variant: '#e6e0e9'
typography:
  display-xl:
    fontFamily: syne
    fontSize: 120px
    fontWeight: '800'
    lineHeight: 110px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: syne
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: syne
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: syne
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: geist
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 28px
  body-md:
    fontFamily: geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  technical-sm:
    fontFamily: geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-caps:
    fontFamily: geist
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 12px
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 160px
  container-max: 1440px
---

## Brand & Style

The design system is an avant-garde exploration of real estate as a curated art installation. Moving beyond traditional property listings, it treats architectural spaces as editorial subjects. The brand personality is intellectual, precise, and sophisticated, targeting an audience that values structural integrity and aesthetic discipline over commercial flash.

The visual style is a blend of **Experimental Minimalism** and **Technical Brutalism**. By utilizing an unconventional seed color as a foundational neutral, the UI evokes the warmth of raw plaster and natural light. The experience is defined by extreme whitespace, a complete absence of rounded corners, and a high-contrast relationship between expressive, oversized headlines and dense, technical metadata. The emotional response is one of calm authority and architectural permanence.

## Colors

This design system rejects digital vibrance in favor of a tectonic, earth-toned palette. The color strategy relies on subtle shifts in warmth to define spatial depth rather than shadows.

- **Primary Background (#FBF6F0):** A breathable bone-white used for the majority of the "gallery" space.
- **Sectional Neutrals (#F3E1DE, #E9D8C4):** Nude Pink and Sand Beige are used for large-scale structural blocks to separate editorial content without introducing harsh lines.
- **Accents (#E4C7A8, #CBB9A6):** Warm Cinnamon and Taupe are reserved for technical highlights, metadata labels, and subtle hover states.
- **Ink (#292623):** Deep Charcoal Brown serves as the singular color for all functional elements, including typography, borders, and iconography, ensuring a grounded, high-contrast legibility against the softer backgrounds.

## Typography

The typographic hierarchy creates a tension between the artistic and the technical. 

**Syne** is utilized for headlines to provide an avant-garde, expressive character. At large scales, it acts as a graphic element itself. For the "Experimental" identity, headlines should occasionally break traditional alignment to frame photography.

**Geist** provides the "blueprints" feel for all body and UI copy. Its monospaced-influenced proportions lend a sense of engineering precision to property descriptions and data points. Use `technical-sm` for all property specifications (sqm, rooms, year) to reinforce the architectural intent.

## Layout & Spacing

The layout philosophy follows a **Rigid Editorial Grid**. It is a 12-column system that prioritizes asymmetrical compositions. 

- **Asymmetry:** Intentional "empty" columns should be used to push content, mimicking the layout of a premium architecture magazine.
- **Section Gaps:** Vertical spacing between major thematic blocks is aggressive (160px+), allowing each "installation" (listing) to breathe.
- **The Frame:** Content should feel framed by the viewport. Avoid full-bleed images unless they are used as background textures for typography.
- **Mobile Reflow:** On mobile, the 12-column grid collapses to 2 columns, with heavy emphasis on vertical scrolling and large-format imagery.

## Elevation & Depth

This design system avoids all traditional shadows and blurs. Depth is achieved strictly through **Tonal Layering** and **Hard Borders**.

- **Flat Stacking:** Elements do not "float." They sit directly on the surface. To indicate hierarchy, use background color shifts (e.g., a Nude Pink card on a Bone background).
- **Physical Lines:** Use 1px Deep Charcoal Brown borders to define boundaries where tonal shifts are insufficient. These lines should feel like architectural drafting lines.
- **No Transparency:** Surface colors are always opaque to maintain the feeling of solid building materials (stone, wood, plaster).

## Shapes

The shape language is strictly **Rectilinear**. To honor the architectural narrative, every element—from buttons to image containers to input fields—must feature sharp 90-degree corners. This 0px radius reinforces the concept of structure, precision, and the "Experimental" avant-garde aesthetic.

## Components

### Buttons
Primary buttons are solid Deep Charcoal Brown with centered Geist Medium text in Ivory. They have no rounded corners. Hover states involve a fill swap to Warm Cinnamon. Secondary buttons are 1px outlines.

### Cards (The "Installation")
Property cards are treated as gallery pieces. The image is the primary focus, with technical metadata (sqm, location) placed in a small `label-caps` font at the very top or bottom, separated by a thin horizontal rule.

### Input Fields
Inputs are minimalist 1px bottom-borders only, resembling a signature line on a contract. The label sits above in `label-caps`.

### Navigation
The navigation bar is a rigid, persistent element. Use wide letter-spacing and `technical-sm` typography. It should feel like a legend on a blueprint.

### Imagery
Photography must be desaturated and architectural. Use "hero" shots that emphasize texture and light. All images are displayed in fixed-ratio containers (1:1 or 4:5) to maintain the grid's structural integrity.