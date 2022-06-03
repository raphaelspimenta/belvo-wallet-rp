import * as colors from 'design-tokens/lightColors'
import * as fonts from 'design-tokens/fonts'
import * as sizes from 'design-tokens/sizes'

export const theme = {
    colors: {
        background: {
            soft: colors.ColorBelvoBackgroundSoft,
            white: colors.ColorBelvoBackgroundWhite,
            hint: colors.ColorBelvoBackgroundHint,
            medium: colors.ColorBelvoBackgroundMedium,
            strong: colors.ColorBelvoBackgroundStrong,
            transparentStrong: colors.ColorBelvoBackgroundTransparentStrong,
        },

        feedback: {
            info: colors.ColorBelvoFeedbackInfo,
            error: colors.ColorBelvoFeedbackError,
            success: colors.ColorBelvoFeedbackSuccess,
            warning: colors.ColorBelvoFeedbackWarning,
        },

        font: {
            primary: colors.ColorBelvoFontPrimary,
            secondary: colors.ColorBelvoFontSecondary,
            action: colors.ColorBelvoFontAction,
            disable: colors.ColorBelvoFontDisable,
            error: colors.ColorBelvoFontError,
            hint: colors.ColorBelvoFontHint,
            overDark: colors.ColorBelvoFontOverDark,
            strong: colors.ColorBelvoFontStrong,
            success: colors.ColorBelvoFontSuccess,
        },

        general: {
            black: colors.ColorBelvoBlack,
            white: colors.ColorBelvoWhite,
            primaryActive: colors.ColorBelvoPrimaryActive,
            primaryHover: colors.ColorBelvoPrimaryHover,
            primaryInactive: colors.ColorBelvoPrimaryInactive,
        },
    },
    fonts: {
        primary: {
            name: fonts.FontBelvoFamilyPrimaryName,
            url: {
                regular: fonts.FontBelvoFamilyPrimaryUrlRegular,
                bold: fonts.FontBelvoFamilyPrimaryUrlBold,
            },
        },
        secondary: {
            name: fonts.FontBelvoFamilySecondaryName,
            url: {
                regular: fonts.FontBelvoFamilySecondaryUrlRegular,
                bold: fonts.FontBelvoFamilySecondaryUrlBold,
            },
        },
        type: fonts.FontBelvoFormatTrueType,
    },
    sizes: {
        base: sizes.SizeBelvoFontBase,
        large: sizes.SizeBelvoFontLarge,
        xLarge: sizes.SizeBelvoFontXLarge,
        xxLarge: sizes.SizeBelvoFontXxLarge,
        xxxLarge: sizes.SizeBelvoFontXxxLarge,
        small: sizes.SizeBelvoFontSmall,
        xSmall: sizes.SizeBelvoFontXSmall,
        xxSmall: sizes.SizeBelvoFontXxSmall,
        xxxSmall: sizes.SizeBelvoFontXxxSmall,
    },
}
