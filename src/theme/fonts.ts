import * as Font from 'expo-font'

export const fonts = {
  bold: 'DM Bold',
  boldItalic: 'DM Bold Italic',
  italic: 'DM Italic',
  medium: 'DM Medium',
  mediumItalic: 'DM Medium Italic',
  regular: 'DM Regular',
}

// fonts preloading
export const fontAssets = [
  {
    fontFamilyOrFontMap: fonts.bold,
    source: require('../../assets/fonts/DMSans-Bold.ttf'),
  },
  {
    fontFamilyOrFontMap: fonts.boldItalic,
    source: require('../../assets/fonts/DMSans-BoldItalic.ttf'),
  },
  {
    fontFamilyOrFontMap: fonts.italic,
    source: require('../../assets/fonts/DMSans-Italic.ttf'),
  },
  {
    fontFamilyOrFontMap: fonts.medium,
    source: require('../../assets/fonts/DMSans-Medium.ttf'),
  },
  {
    fontFamilyOrFontMap: fonts.mediumItalic,
    source: require('../../assets/fonts/DMSans-MediumItalic.ttf'),
  },
  {
    fontFamilyOrFontMap: fonts.regular,
    source: require('../../assets/fonts/DMSans-Regular.ttf'),
  },
].map((x) => Font.loadAsync(x.fontFamilyOrFontMap, x.source))

export default fonts
